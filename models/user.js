const express = require('express');
const app = express();
const Joi = require('joi');
var mysql = require('mysql');
var bodyParser = require('body-parser');
//var routes = require('./route.js');
var connection = require('./connect.js');
var session = require('express-session');
var path = require('path');
var bcrypt = require('bcrypt');
var nodemailer= require('nodemailer');
var jwt = require('jwt-simple');
var jwtDecode = require('jwt-decode');
app.use(bodyParser.json());


"use strict"
var secretsend ='';

class Twitter_user {
    getindex(request, response) {
        response.sendFile(path.join(__dirname + '/../views/login.html'));
    }

    getregistration(request, response) {
        response.sendFile(path.join(__dirname + '/../views/registration.html'));
    }

    postauth(request, response) {
        var user_handle = request.body.user_handle;
        var password = request.body.password;
        if (user_handle && password) {
            connection.query('SELECT * FROM user WHERE user_handle = ? AND password = ?', [user_handle, password], function (error, results, fields) {
                if (results.length > 0) {
                    request.session.loggedin = true;
                    request.session.user_handle = user_handle;
                    response.redirect('/home');
                } else {
                    response.send('Incorrect Username and/or Password!');
                }
                response.end();
            });
        } else {
            response.send('Please enter Username and Password!');
            response.end();
        }
    }
    followercount(request, response){
        var user_handle = request.body.name;
        //console.log("it si "+request.body.name);

        connection.query('SELECT count(*) FROM user_follower WHERE user_handle = ? ', [user_handle], function (error, results, fields) {
            response.send(results);
            

        });


    }
    
    editprofile(request, response) {

        var profile_image = request.body.profile_image;
        var user_handle = request.body.user_handle;
        connection.query('update user set profile_image=? where user_handle=?', [profile_image, user_handle]);
        response.send("success");

    }
    postauth2(request, response) {
        var user_handle = request.body.user_handle;
        var password = request.body.password;
        var Name = request.body.Name;
        var email = request.body.email;
        var password_hash = request.body.password_hash;
        const courses = {
            user_handle,
            password,
            Name,
            email,
            password_hash


        };

        connection.query('select * from user where user_handle =?',[user_handle],function(err,data){
            if(data.length > 0){
                var value ='';
                response.send(value);

            }
            else
            {
                bcrypt.hash(courses.password_hash, 10, function (err, hash) {
                    if (err) 
                    	console.log(err);
                        courses.password_hash = hash;
                    connection.query(`INSERT INTO user set?`, [courses])
                    //response.sendFile(path.join(__dirname + '/../views/login.html'));
                    response.redirect('/');
        
                    //console.log(courses.password_hash);
        
                });
        

            }
        })



        // connection.query(`INSERT INTO user set?`,[courses])


        // bcrypt.hash(courses.password_hash, 10, function (err, hash) {
        //     if (err) //console.log(err);
        //         courses.password_hash = hash;
        //     connection.query(`INSERT INTO user set?`, [courses])
        //     //response.sendFile(path.join(__dirname + '/../views/login.html'));
        //     response.redirect('/');

        //     //console.log(courses.password_hash);

        // });






        // response.sendFile(path.join(__dirname + '/views/login.html'));

        // //console.log(user_handle);


    }
      postauth3(request,response){
      var user_handle = request.body.user_handle;
      connection.query('select * from user where user_handle =?',[user_handle],function(err,data){
        if(data.length > 0){
            var value ='';
            response.send(value);

        }
    });

  }

    editprofileget(request, response) {

        // var user_handle = request.body.user_handle;
        var user_handle = request.body.user_handle;
        var img;
        // ////console.log("edit func");
        // ////console.log(profile_image);
        // ////console.log(user_handle);

        //  ////console.log("hi");
        connection.query('select profile_image from user where user_handle=?', [user_handle], function (error, results, fields) {
            if (results.length > 0) {

                response.send(results);
                //console.log(results);
            }
            response.end();
        });


        //   response.send();


    }
    gethome(request, response) {
        var name = request.body.name;
        if (request.session.loggedin) {
            response.send('Welcome back, ' + request.session.name + '!');
            // response.sendFile(path.join(__dirname + '/home'));
            //response.redirect('login.html');
            //////console.log("hii");
            //response.render('index.html');
            //response.sendFile(path.join(__dirname + '/login.html'));
            //  var name =request.session.user_handle;
            // ////console.log(name);
            // response.sendFile(path.join(__dirname + '/index.html', {name:name}));

        } else {
            response.send('Please login to view this page!');
        }
        response.end();
    }

    forgot_pass(request, response) {
        response.sendFile(path.join(__dirname + '/../views/forgot_pass.html'));
    }


    emailforgotpass(request,response){
        //console.log("i m in class email")
        var email = request.body.email;
        connection.query('select * from user where email =?',[email],function(err,data){
            if(data.length >0)
            {
                 var payload ={
                     id:data[0].user_id,
                     email:email
                 };
                 connection.query('update user set reset_password = 0 where user_id=?',[data[0].user_id]);
                 //console.log(payload.id);
                 var secret = data[0].password_hash +'-'+data[0].updated_at;
                 secretsend = secret;
                 //var secret='fe1a1915a379f3be5394b64d14794932-1506868106675';
                 var token = jwt.encode(payload, secretsend);
                 //console.log(token);

                
                 //var final = jwt.decode(token,secretsend);
                 ////console.log(final);
                let transporter = nodemailer.createTransport({
                    host: 'smtp.mailtrap.io',
                    port: 2525,
                    //secure: true,
                    auth: {
                        user: 'bad9576e0578f6',
                        pass: 'cdf6614fee351a'
                    }
                });
                const message = {
                    from: 'rhea.mitchelle.twitter@rhechelle.com', // Sender address
                    to: email,         // List of recipients
                    subject: 'reset Password', // Subject line
                    text: 'Have the most fun you can in a car. Get your Tesla today!', 
                    html:'<a href="http://localhost:8000/resetpassword/' + payload.id + '/' + token + '">Reset password</a>'// Plain text body
                };


                transporter.sendMail(message, function(err, info) {
                    if (err) {
                      console.log(err)
                    } else {
                      //console.log(info);
                    }
                });
               
               response.send("Password reset link has been sent to you"); 
               //console.log(data);
            }
            else{
                response.send("this email doesnt exist");
                
            }
        })
    }

    resetpassword(request,response){
        var id = request.params.id;
        var secret = secretsend;
        //console.log(secret);
       
       // var secret = 'fe1a1915a379f3be5394b64d14794932-1506868106675';
        var token = request.params.token;
        //console.log(token);
       //var decoded = jwt.decode(token, secret);
      // //console.log("paylod" +decoded.email);
         
    response.send
    (
    
    
    '<body>'+


            '<form style="position:relative;width:365px; height:40%;margin:50px auto 10px; text-align:center; background:#eeeeef;padding:40px;" action="/resetpassword" method="POST" > '+
            '<h4>Reset Password<h4>'+   
            '<input type="hidden" name="id"  id="id_user" value="' + id + '" /> '+
                '<input type="hidden" name="token"  id="token" value=" '+ token + '" /> '+
                '<input style=" width: 100%; padding: 12px 20px;margin: 8px 0;display: inline-block;border: 1px solid #ccc;border-radius: 4px;box-sizing: border-box;"type="password" name="password" id="pass" value="" maxlength="20" pattern=".{6,20}"  title="6 to 20 characters" placeholder="Enter new password" /> '+
                '<input type="submit" style=" width: 100%;background-color: #4CAF50; color: white; padding: 14px 20px;margin: 8px 0; border: none;border-radius: 4px;cursor: pointer;" value="Reset Password" /> '+
            '</form>'+
            
            '<script src="../controllers/ajax_calls.js" charset="utf-8" ></script>'+
    '</body>');
   
    
    }

    resetpasswordnext(request,response){
        var id = request.body.id;
        //console.log(id);
        var secret = secretsend;
        //console.log(secret);
        
        //var secret = 'fe1a1915a379f3be5394b64d14794932-1506868106675';
       // var payload = jwt.decode(request.body.token, secret);
       var token = request.body.token; 
       var password = request.body.password;
        var password_hash = '';
        var decoded = jwtDecode(token, secret);
       //console.log("payload final" +decoded.id);
       connection.query('select * from user where user_id=?',[id],function(err,data)
       {


        if(data[0].reset_password == 1)
        {
            response.send(" you have already resetted your password to reset again click on forgot password again");
        }
        else{
            bcrypt.hash(password, 10, function (err, hash) {
                if (err) 
                console.log(err);

                //console.log(hash);
                var hashsplit = hash.split("$2b$10$");
               password_hash = hashsplit[1];
               //var password_hash = hash;
                    connection.query('update  user set password = ? , password_hash=? where user_id =?', [password,password_hash,id])
                     response.send("password has been changed login with your new password");
                });
        

                connection.query('update user set reset_password = 1 where user_id =?',[data[0].user_id]);

        }
       });
        ////console.log(payload);
        
       
            

    }











    for_password(request, response) {
        var email = request.body.email;
        //  ////console.log(JSON.stringify(email));
        connection.query('select user_id from user where email= ? ', [request.body.email], function (err, data) {
            if (err)
                console.log(err);
            else {
                response.send(JSON.stringify(data));
                //  ////console.log(data);

            }
        });
    }




    ajaxLogin(request, response) {

        var user_handle = request.body.user_handle;

        var password = request.body.password;
        // ////console.log(user_handle);
        if (user_handle && password) {
            //  ////console.log("hi");
            connection.query('SELECT * FROM user WHERE user_handle = ? AND password = ?', [user_handle, password], function (error, data, fields) {
                if (data.length > 0) {
                    request.session.loggedin = true;
                    request.session.user_handle = user_handle;
                    response.send(data);

                    //response.redirect('/home');
                } else {
                    var num = '';
                    response.send(num);
                    //console.log("num" +num);
                }
                response.end();
            });
        } else {
            //   ////console.log("hi2");

            response.send('Please enter Username and Password!');
            response.end();
        }

    }


   retweet(request, response){
//console.log("retweet class");
        var tweet_id = request.body.tweet_id;
       var user_handle= request.body.user_handle;
         const  tweet ={
             user_handle,
             tweet_id
     
         }
         var idname;
         connection.query('select * from retweet where tweet_id=? and user_id = (select user_id from user where user_handle =?)',[tweet_id,user_handle],function(err,data){
            response.send(data);

          //connection.query('insert into retweet (tweet_id,user_id) values (? ,(select user_id from user where user_handle = ?))',[tweet_id,user_handle],function(err,data){
              if(err)
              {throw err;}
              else
              {
                //idname= data[0].user_id;
                //  //console.log(idname);
              } 
    
          });
     
        // connection.query('Insert into retweet set ?',[tweet])
         //response.send("success");
     
     
     
    
    }

    retweetpost(request, response){
        //console.log("retweet insert class");
                var tweet_id = request.body.tweet_id;
               var user_handle= request.body.user_handle;
                 const  tweet ={
                     user_handle,
                     tweet_id
             
                 }
                 var idname;


        


       // connection.query('Insert into tweets set ?', [tweet])
                // connection.query('select * from retweet where tweet_id=? and user_id = (select user_id from user where user_handle =?)',[tweet_id,user_handle],function(err,data){
                   // response.send(data);
        
                  connection.query(`insert into retweet (tweet_id,user_id) values (? ,(select user_id from user where user_handle = ?)); INSERT INTO tweets (post_text, hashtag, media, userhandle, user_retweeted, retweetid) SELECT post_text, hashtag, media, userhandle, '${user_handle}', tweet_id FROM tweets WHERE tweet_id=?;`,[tweet_id,user_handle,tweet_id],function(err,data){
                      if(err)
                      {throw err;}
                      else
                      {
                        //idname= data[0].user_id;
                        //  //console.log(idname);
                      } 
            
                  });
             
                // connection.query('Insert into retweet set ?',[tweet])
                 //response.send("success");
             
             
             
            
            }
    like(request, response){
      // var likecount = request.body.likecount;
        var tweet_id = request.body.tweet_id;
        var name =request.body.name;
        //console.log("tweet_id"+tweet_id);
        //console.log("name"+name);

        connection.query('select * from like_post where user_id=(select user_id from user where user_handle =?) and tweet_id = ?',[name, tweet_id],function(err,data){
            response.send(data);
            //console.log("data is like"+JSON.stringify(data));
      //  connection.query('insert into like_post (user_id, tweet_id) values ((select user_id from user where user_handle = ?) ,? )',[name, tweet_id],function(err,data){

        });
    }

    likepost(request, response){
        // var likecount = request.body.likecount;
          var tweet_id = request.body.tweet_id;
          var name =request.body.name;
         // connection.query('select * from like where user_id=(select user_id from user where user_handle =?) and tweet_id = ?',[name, tweet_id],function(err,data){
           //   response.send(data);
         connection.query('insert into like_post (user_id, tweet_id) values ((select user_id from user where user_handle = ?) ,? ); update tweet.tweets set likecount=(select count(*) from tweet.like_post where tweet_id = ?) where tweet_id=? ',[name, tweet_id,tweet_id,tweet_id],function(err,data){
            response.send(data);
          });
      }
    displaytweets(request, response) {
        var userhandle = request.body.userhandle;
        connection.query('select t.created_at,t.user_retweeted,t.post_text,u.profile_image,t.updated_at,t.userhandle,t.media,t.tweet_id,t.likecount from tweets t inner join user u on t.userhandle = u.user_handle where t.userhandle = ? or t.user_retweeted = ? order by t.updated_at desc;', [userhandle,userhandle], function (err, data) {
            response.send(data);
            //console.log(data[0].updated_at);
            if (err) {
                response.send("error");
            }
        });
    }
    displayretweets(request, response) {
        var userhandle = request.body.userhandle;
        //console.log("hi");
        connection.query('select * from tweets t inner join user u on t.userhandle = u.user_handle where t.userhandle = ? or t.user_retweeted =?;', [userhandle,userhandle], function (err, data) {
            response.send(data);
            //console.log(JSON.stringify("retweet"+data));
            if (err) {
                response.send("error");
            }
        });
    }
   
    // }
    globaltweets(request, response) {
        //console.log("hi global tweet");
        var userhandle = request.body.userhandle;
        //console.log("userhandle"+userhandle);
        connection.query(' select u.profile_image, t.tweet_id,t.post_text,t.hashtag,t.media,t.userhandle,t.updated_at,t.likecount,t.created_at,t.user_retweeted from user_follower uf inner join user u on uf.follower_id = u.user_id inner join tweets t on t.userhandle = u.user_handle  where uf.user_id=(select user_id from user where user_handle=?) group by t.tweet_id order by t.updated_at desc;', [userhandle], function (err, data) {
            response.send(data);
            //console.log(JSON.stringify(data));
           // //console.log(data[0].updated_at);
            if (err) {
                response.send("error");
            }
        });
    }
    forgot_pass(request, response) {
        response.sendFile(path.join(__dirname + '/../views/forgot_pass.html'));
    }

    for_password(request, response) {
        var email = request.body.email;
        //  ////console.log(JSON.stringify(email));
        connection.query('select user_id from user where email= ? ', [request.body.email], function (err, data) {
            if (err)
                console.log(err);
            else {
                response.send(JSON.stringify(data));
                //  ////console.log(data);

            }
        });
    }
    following(request, response){
    var name = request.body.name;

    connection.query('select * from user_follower where user_id=(select user_id from user where user_handle =?)',[name],function(err,data){

        response.send(data);
   
       
    });
    }
    followers(request, response){
        var name = request.body.name;
    
        connection.query('select * from user_follower where follower_id=(select user_id from user where user_handle =?)',[name],function(err,data){
    
            response.send(data);
       
           
        });
        }
follow(request, response){
    var follower_id = request.body.index;
    var namefollower = request.body.user_handle;
    var unfollow = "unfollow";
    
    
    connection.query('insert into user_follower (user_id,follower_id, unfollow) values ((select user_id from user where user_handle = ?),? ,?)',[namefollower,follower_id,unfollow],function(err,data){
        response.send(data);
   
        if(err)
        {throw err;}
        else
        {
          //idname= data[0].user_id;
          //  //console.log(idname);
        } 

    });
    


}

unfollow(request, response){
    var follower_id = request.body.index;
    var namefollower = request.body.user_handle;
    var unfollow = "unfollow";
    
    
    connection.query('delete from user_follower where follower_id=?',[follower_id],function(err,data){

   
        if(err)
        {throw err;}
        else
        {
          //idname= data[0].user_id;
          //  //console.log(idname);
        } 

    });
    


}

delete_tweet(request, response){
        var tweet_id = request.body.tweet_id;
//console.log("delete"+ tweet_id);

        connection.query('delete from tweets where tweet_id=? or retweetid=?; delete from retweet where tweet_id=?',[tweet_id,tweet_id,tweet_id],function(err,data){
              //if(err) throw err;
            //response.send("hi"+JSON.stringify(data));
        });
        


}

    search_profile(request, response) {
        //console.log("i m in class")

        var searchname = request.body.searchname;
        var name = request.body.name;
        //console.log("searchname"+searchname);
        //console.log("name"+name);

        connection.query(` select * from user where user_handle = ? and not exists(select * from user_follower where user_id=(select user_id from user where user_handle =? ) and follower_id =(select user_id from user where user_handle=?))   `, [searchname, name,searchname], function (err, data) {
            //console.log("hi");

            response.send(data);
//console.log("data"+JSON.stringify(data));
               
         

        });
    }

    search_profileunfollow(request, response) {
        //console.log("i m in class")

        var searchname = request.body.searchname;
        var name = request.body.name;
        //console.log(name);
        connection.query(` select * from user where user_handle = ? and exists(select * from user_follower where user_id=(select user_id from user where user_handle =? ) and follower_id =(select user_id from user where user_handle=?))   `, [searchname, name,searchname], function (err, data) {
            //console.log("hi");

            response.send(data);
//console.log(data);
               
         

        });
    }




    search_hashtag(request, response) {
        var searchname = request.body.searchname;
        connection.query('select * from tweets where match(hashtag) Against(?) order by updated_at desc ', [searchname], function (err, data) {
            response.send(data);
            if (err) {
                response.send("error");
            }
        })
    }


    tweets(request, response) {
        var post_text = request.body.post_text;
        var hashtag = request.body.hashtag;
        var media = request.body.media;
        
        var userhandle = request.body.userhandle;
        

        const tweet = {
            post_text,
            media,

            hashtag,
            userhandle,
            

        }
        

        connection.query('Insert into tweets set ?', [tweet])
        response.send("success");



    }





    ajaxcallindex(request, response) {

        var id = request.body.id;

        ////console.log("id is"+id);

        // var password = request.body.password;
        // ////console.log(user_handle);
        if (id) {
            //  ////console.log("hi");
            connection.query(`SELECT * FROM user WHERE id = ? `, [id], function (error, data, fields) {
                if (data.length > 0) {
                    request.session.loggedin = true;
                    request.session.user_handle = user_handle;
                    response.send(data);

                    //response.redirect('/home');
                } else {
                    response.send('Incorrect Username and/or Password!');
                }
                response.end();
            });
        } else {
            //   ////console.log("hi2");

            response.send('Please enter Username and Password!');
            response.end();
        }

    }
}

module.exports = Twitter_user;
