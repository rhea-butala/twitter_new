
var formdata = {};
var name;
var idval;
var txt;
var following_no;

var followers_no;
$(window).scroll(function() {
    if($(window).scrollTop() > 0) {
       
    } else {
        globaltweets();
    }
});
// window.addEventListener('scroll', function() {
//     displaytweets();
//     //document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
//   });



document.getElementById("dispsearch").style.visibility = "hidden";

document.getElementById("dispsearch1").style.visibility = "hidden";

document.getElementById("dispsearchHash").style.visibility = "hidden";

function imagechange() {
    var x = document.getElementById("media");
    txt = "";
    if ('files' in x) {


        var file = x.files[0];
        if ('name' in file) {
            txt = file.name;
        }
        else{
    txt = "logo.jpg";

        }

    }
    
            console.log("txt out"+txt);
    //console.log(txt);
}
//console.log(idval);
function display() {
    //console.log(following_no +" "+ followers_no);
    ////console.log(following+"following outside");
    var url = window.location.pathname;
    var name_disp = url.substring(url.lastIndexOf('/')+1);
    console.log(name_disp);
    document.getElementById("namedisp").innerHTML = `@${name_disp}`;
   
   var senddata={
       name:name

    }
  //  //console.log(senddata);
    
    $.ajax({
        type: "get",

        url: window.location + "/followercount",
        data: senddata,
        datatype: 'json'

    })
        .done(function (data) {
            //console.log(data);
           //console.log("data is follow"+data);

        })
        .fail(function (jqxhr, textStatus, err) {
           //console.log('Ajax error',textStatus);
        });
};
var imageonload;
var imageurl;
function emailforgotpass()

{    //console.log("i m in ajax email");
    var email = $('#email').val();
    const send_email={
        email
    }
    //console.log(send_email);
    $.ajax({
        type: "POST",

        url: window.location + "/emailforgotpass",
        data: send_email,
        datatype: 'json'

    })
        .done(function (data) {
            //console.log(data);
           
          $("#getemail").html(JSON.stringify(data));
          reset_val();
        })
        .fail(function (jqxhr, textStatus, err) {
           //console.log('Ajax error',textStatus);
        });




}
function reset_val()
{
    $('#email').val("");
}

function reset_password()
{
    var id_user = $('#id_user').val();
    var token = $('#token').val();
    var pass = $('#pass').val();
    const reset_data={
        id_user,
        token,
        pass
    }
    $.ajax({
        type: "POST",

        url: "http://localhost:7000" + "/resetpassword",
        data: reset_data,
        datatype: 'json'

    })
        .done(function (data) {
            //console.log(data);
           
         // $("#displayemail").html(JSON.stringify(data));
        })
        .fail(function (jqxhr, textStatus, err) {
           //console.log('Ajax error',textStatus);
        });


}


function displaytweets(){
    var post_data={
        userhandle:name
    }
    $.ajax({
        type:"get",
        url:window.location +"/displaytweets",
        data : post_data,
        
        datatype:'json'

    })
    .done(function(data){
        var html = "";
        var htmlimage="";

        var t = "";
        var tweet_time ="";
        $.each(data, function (index, value) {
          //  likecountdisplay(data[index].tweet_id);
            
           // //console.log("like no in displaytweets "+likeno1);
           
          // glow(data[index].tweet_id);
            t = data[index].created_at;
            tweet_time = t.toLocaleString('en-US',{timeZone : "Asia/Kolkata"});
           // //console.log(data[index].media+ data[index].tweet_id,data[index].media);
         // t =  data[index].updated_at.split("T");
        
            //retweetcheck(data[index].user_retweeted,data[index].updated_at);

         

            html+=``
        if(data[index].user_retweeted){
            html+=`<article class="post"><header>
                
            <div class="title">
                <h2><a href="single.html"></a></h2>
                ${data[index].post_text}
           <p></p>
            </div>
            <div class="meta">
            Reposted: @${data[index].user_retweeted} <img class="Profile_post_img" src="${data[index].profile_image}" alt="" />
                <time class="published" datetime="2015-11-01">Time: ${tweet_time}</time>
               
        </header>
        <header>
                
                    <div class="title">
                        <h2><a href="single.html"></a></h2>
                        ${data[index].post_text}
                   <p></p>
                    </div>
                    <div class="meta">
                    
                        
                       Posted By: @${data[index].userhandle} <img class="Profile_post_img" src="${data[index].profile_image}" alt="" />
                       <time class="published" datetime="2015-11-01">Time: ${tweet_time}</time></div>
                </header>
                `
                if(data[index].media!='home/profile_image/undefined'){
                html+=
                `
        <a href="single.html" class="image featured"></a>
                <iframe src="${data[index].media}" height="400" style="width:100%"></iframe>
                <p></p>
                <footer>
                <ul class="actions">
                 <li><button class="button large" onmouseleave="displaytweets()" onclick="retweet(${data[index].tweet_id})">Retweet</button></li>
                 <li><button class="button large" onmouseleave="displaytweets()" onclick="delete_tweet(${data[index].tweet_id})">Delete</button></li>

            </ul>
                    <ul class="stats">
                        <li><a href="#"></a></li>
                        <li><div id="error"></div></li></ul>
                        <div class="icon solid fa-heart" style="color:red" onmouseleave="displaytweets()" onclick="glow(${data[index].tweet_id})" ></div></div>
                        &nbsp;&nbsp;&nbsp;
                        <div id="likeno" class="countno">${data[index].likecount}</div>
                        <div id="error"></div>
                    
                </footer></article>
        
        `
                }
                else{
                    html+=`
                    
                    <a href="single.html" class="image featured"></a>
                
                <p></p>
                <footer>
                <ul class="actions">
                 <li><button class="button large" onmouseleave="displaytweets()" onclick="retweet(${data[index].tweet_id})">Retweet</button></li>
                 <li><button class="button large" onmouseleave="displaytweets()" onclick="delete_tweet(${data[index].tweet_id})">Delete</button></li>

            </ul>
                    <ul class="stats">
                        <li><a href="#"></a></li>
                        <li><div id="error"></div></li>
                        </ul>
                        <div class="icon solid fa-heart" style="color:red" onmouseleave="displaytweets()" onclick="glow(${data[index].tweet_id})" ></div></div>
                        &nbsp;&nbsp;&nbsp;
                        <div id="likeno" class="countno">${data[index].likecount}</div>
                        <div id="error"></div>
                  
                </footer></article>`;
                }
        }
        else{
            html+=
           
            `<article class="post">
           
                <header>
                
                    <div class="title">
                        <h2><a href="single.html"></a></h2>
                        ${data[index].post_text}
                   <p></p>
                    </div>
                    <div class="meta">
                    
                        
                       Posted By: @${data[index].userhandle} <img class="Profile_post_img" src="${data[index].profile_image}" alt="" />
                       <time class="published" datetime="2015-11-01">Time: ${tweet_time}</time></div>
                </header>
               
            `;
            if(data[index].media!='home/profile_image/undefined'){


                html+=` <a href="single.html" class="image featured"></a>
                <iframe src="${data[index].media}" height="400" style="width:100%"></iframe>
                <p></p>
                <footer>
                <ul class="actions">
                 <li><button class="button large" onmouseleave="displaytweets()" onclick="retweet(${data[index].tweet_id})">Retweet</button></li>
                 <li><button class="button large" onmouseleave="displaytweets()" onclick="delete_tweet(${data[index].tweet_id})">Delete</button></li>

            </ul>
                    <ul class="stats">
                        <li><a href="#"></a></li>
                        <li><div id="error"></div></li>
                        </ul>
                        <div class="icon solid fa-heart" style="color:red" onmouseleave="displaytweets()" onclick="glow(${data[index].tweet_id})" ></div></div>
                        &nbsp;&nbsp;&nbsp;
                        <div id="likeno" class="countno">${data[index].likecount}</div>
                        <div id="error"></div>
                </footer></article>`;
                console.log(data[index].tweet_id);


            }
            else{
                html+=`
                <a href="single.html" class="image featured"></a>
                
                <p></p>
                <footer>
                <ul class="actions">
                 <li><button class="button large" onmouseleave="displaytweets()" onclick="retweet(${data[index].tweet_id})">Retweet</button></li>
                 <li><button class="button large" onmouseleave="displaytweets()" onclick="delete_tweet(${data[index].tweet_id})">Delete</button></li>

            </ul>
                    <ul class="stats">
                        <li><a href="#"></a></li>
                        <li><div id="error"></div></li>
                        <li><div class="icon solid fa-heart" style="color:red" onmouseleave="displaytweets()" onclick="glow(${data[index].tweet_id})" ></div></div></li>
                        
                        </ul>
                        <div class="icon solid fa-heart" style="color:red" onmouseleave="displaytweets()" onclick="glow(${data[index].tweet_id})" ></div></div>
                        &nbsp;&nbsp;&nbsp;
                        <div id="likeno" class="countno">${data[index].likecount}</div>
                        <div id="error"></div>
                </footer></article>`;
            }
        }
   // //console.log(data[index].tweet_id);
         t = ""; 
         tweet_time ="";
        });
     
        $('#post').html(html);
      
       
    })
    .fail(function(jqxhr,textStatus,err){
        //console.log('Ajax error',textStatus);
    });
}

function retweetcheck(name, updated_at){
    var html="";
    html=``;
$('#repost').html(html);

}
function displayretweets(){
    var post_data={
        userhandle:name
    }
    $.ajax({
        type:"post",
        url:window.location +"/displayretweets",
        data : post_data,
        
        datatype:'json'

    })
    .done(function(data){
        //console.log("hiiii");
        var html = "";
        var t = "";
        var tweet_time ="";
        //console.log(data);
        $.each(data, function (index, value) {
          //  likecountdisplay(data[index].tweet_id);
            
           // //console.log("like no in displaytweets "+likeno1);
           
          // glow(data[index].tweet_id);
            t = data[index].updated_at;
            tweet_time = t.toLocaleString('en-US',{timeZone : "Asia/Kolkata"});
            //console.log(data[index].media+ data[index].tweet_id);
         // t =  data[index].updated_at.split("T");
            html+=`
            <article class="post">
                <header>
                    <div class="title">
                        <h2><a href="single.html"></a></h2>
                        ${data[index].post_text} 
                   <p></p>
                    </div>
                    <div class="meta">
                        <time class="published" datetime="2015-11-01">${tweet_time}</time>
                        <a href="#" class="author"><span class="name">${data[index].userhandle}</span><img class="Profile_post_img" src="images/avatar.jpg" alt="" /></a>
                        </div>
                </header>
                <a href="single.html" class="image featured"></a>
                <iframe src="${data[index].media}" height="400" style="width:100%"></iframe>
                <p></p>
                <footer>
                <ul class="actions">
                 <li><button class="button large" onmouseleave="globaltweets()" onclick="retweet(${data[index].tweet_id})">Retweet</button></li>
                 <li><button class="button large" onmouseleave="globaltweets()" onclick="delete_tweet(${data[index].tweet_id})">Delete</button></li>

            </ul>
                    <ul class="stats">
                        <li><a href="#"></a></li>
                        <li><div id="error"></div></li>
                        <li><div class="icon solid fa-heart" style="color:red" onmouseleave="globaltweets()" onclick="glow(${data[index].tweet_id})" ></div></div></li>
                        
                        </ul>
                        <div class="icon solid fa-heart" style="color:red" onmouseleave="displaytweets()" onclick="glow(${data[index].tweet_id})" ></div></div>
                        &nbsp;&nbsp;&nbsp;
                        <div id="likeno" class="countno">${data[index].likecount}</div>
                        <div id="error"></div>
                </footer>
            </article>`;
   // //console.log(data[index].tweet_id);
         t = ""; 
         tweet_time ="";
        });
     
        $('#post').html(html);
      
       
    })
    .fail(function(jqxhr,textStatus,err){
        //console.log('Ajax error',textStatus);
    });
}
function delete_tweet(tweet_id){
  //  alert("Deleted");
//console.log("sajhsgfui"+ tweet_id);

   var formdata ={
    tweet_id:tweet_id
    }
    //console.log(formdata);
    $.ajax({
        type: "delete",

        url: window.location + "/delete_tweet",
        data: formdata,
        datatype: 'json'

    })
        .done(function (data) {
           

            //console.log("success");
        

        })
        .fail(function (jqxhr, textStatus, err) {
            ////console.log('Ajax error',textStatus);
        });


}
// function likecountdisplay(tweet_id){
//     var likeno;

//     var senddata={
//         tweet_id:tweet_id
//     }
//     $.ajax({
//         type: "POST",

//         url: window.location + "/likecountdisplay",
//         data: senddata,
//         datatype: 'json'

//     })
//         .done(function (data) {
//            likeno = data.length;
//            //console.log("like no is "+likeno);
// //likecountPost(tweet_id,likeno)

//            //return likeno;


//         })
//         .fail(function (jqxhr, textStatus, err) {
//            //console.log('Ajax error',textStatus);
//         });
//       //  //console.log("outside "+likeno);



    
// }
// function likecountPost(tweet_id, likeno){
    

//     var senddata={
//         tweet_id:tweet_id,
//         likeno:likeno
//     }
//     $.ajax({
//         type: "POST",

//         url: window.location + "/likecountPost",
//         data: senddata,
//         datatype: 'json'

//     })
//         .done(function (data) {
          
//             display();

//         })
//         .fail(function (jqxhr, textStatus, err) {
//            //console.log('Ajax error',textStatus);
//         });
//       //  //console.log("outside "+likeno);


// }
function bodyimage(){

}

function globaltweets(){
    var post_data={
        userhandle:name
    }
    $.ajax({
        type:"get",
        url:window.location +"/globaltweets",
        data : post_data,
        
        datatype:'json'

    })
    .done(function(data){
        //console.log("hiiii");
        var html = "";
        var t = "";
        var tweet_time ="";
        //console.log(data);
        $.each(data, function (index, value) {
          //  likecountdisplay(data[index].tweet_id);
            
           // //console.log("like no in displaytweets "+likeno1);
           
          // glow(data[index].tweet_id);
            t = data[index].updated_at;
            tweet_time = t.toLocaleString('en-US',{timeZone : "Asia/Kolkata"});
            //console.log(data[index].media+ data[index].tweet_id);
         // t =  data[index].updated_at.split("T");
         html+=``
         if(data[index].user_retweeted){
             html+=`<article class="post"><header>
                 
             <div class="title">
                 <h2><a href="single.html"></a></h2>
                 ${data[index].post_text}
            <p></p>
             </div>
             <div class="meta">
             Reposted: @${data[index].user_retweeted} <img class="Profile_post_img" src="${data[index].profile_image}" alt="" />
                 <time class="published" datetime="2015-11-01">Time: ${tweet_time}</time>
                
         </header>
         <header>
                 
                     <div class="title">
                         <h2><a href="single.html"></a></h2>
                         ${data[index].post_text}
                    <p></p>
                     </div>
                     <div class="meta">
                     
                         
                        Posted By: @${data[index].userhandle} <img class="Profile_post_img" src="${data[index].profile_image}" alt="" />
                        <time class="published" datetime="2015-11-01">Time: ${tweet_time}</time></div>
                 </header>
                 `
                 if(data[index].media!='home/profile_image/undefined'){
                 html+=
                 `
         <a href="single.html" class="image featured"></a>
                 <iframe src="${data[index].media}" height="400" style="width:100%"></iframe>
                 <p></p>
                 <footer>
                 <ul class="actions">
                  <li><button class="button large" onmouseleave="globaltweets()" onclick="retweet(${data[index].tweet_id})">Retweet</button></li>
                  <li><button class="button large" onmouseleave="globaltweets()" onclick="delete_tweet(${data[index].tweet_id})">Delete</button></li>
 
             </ul>
                     <ul class="stats">
                         <li><a href="#"></a></li>
                         <li><div id="error"></div></li>
                         </ul>
                        <div class="icon solid fa-heart" style="color:red" onmouseleave="displaytweets()" onclick="glow(${data[index].tweet_id})" ></div></div>
                        &nbsp;&nbsp;&nbsp;
                        <div id="likeno" class="countno">${data[index].likecount}</div>
                        <div id="error"></div>
                 </footer></article>
         
         `
                 }
                 else{
                     html+=`
                     
                     <a href="single.html" class="image featured"></a>
                 
                 <p></p>
                 <footer>
                 <ul class="actions">
                  <li><button class="button large" onmouseleave="globaltweets()" onclick="retweet(${data[index].tweet_id})">Retweet</button></li>
                  <li><button class="button large" onmouseleave="globaltweets()" onclick="delete_tweet(${data[index].tweet_id})">Delete</button></li>
 
             </ul>
                     <ul class="stats">
                         <li><a href="#"></a></li>
                         <li><div id="error"></div></li>
                         </ul>
                        <div class="icon solid fa-heart" style="color:red" onmouseleave="displaytweets()" onclick="glow(${data[index].tweet_id})" ></div></div>
                        &nbsp;&nbsp;&nbsp;
                        <div id="likeno" class="countno">${data[index].likecount}</div>
                        <div id="error"></div>
                 </footer></article>`;
                 }
         }
         else{
             html+=
            
             `<article class="post">
            
                 <header>
                 
                     <div class="title">
                         <h2><a href="single.html"></a></h2>
                         ${data[index].post_text}
                    <p></p>
                     </div>
                     <div class="meta">
                     
                         
                        Posted By: @${data[index].userhandle} <img class="Profile_post_img" src="${data[index].profile_image}" alt="" />
                        <time class="published" datetime="2015-11-01">Time: ${tweet_time}</time></div>
                 </header>
                
             `;
             if(data[index].media!='home/profile_image/undefined'){
 
 
                 html+=` <a href="single.html" class="image featured"></a>
                 <iframe src="${data[index].media}" height="400" style="width:100%"></iframe>
                 <p></p>
                 <footer>
                 <ul class="actions">
                  <li><button class="button large" onmouseleave="globaltweets()" onclick="retweet(${data[index].tweet_id})">Retweet</button></li>
                  <li><button class="button large" onmouseleave="globaltweets()" onclick="delete_tweet(${data[index].tweet_id})">Delete</button></li>
 
             </ul>
                     <ul class="stats">
                         <li><a href="#"></a></li>
                         <li><div id="error"></div></li>
                         </ul>
                        <div class="icon solid fa-heart" style="color:red" onmouseleave="displaytweets()" onclick="glow(${data[index].tweet_id})" ></div></div>
                        &nbsp;&nbsp;&nbsp;
                        <div id="likeno" class="countno">${data[index].likecount}</div>
                        <div id="error"></div>
                 </footer></article>`;
                 console.log(data[index].tweet_id);
 
 
             }
             else{
                 html+=`
                 <a href="single.html" class="image featured"></a>
                 
                 <p></p>
                 <footer>
                 <ul class="actions">
                  <li><button class="button large" onmouseleave="globaltweets()" onclick="retweet(${data[index].tweet_id})">Retweet</button></li>
                  <li><button class="button large" onmouseleave="globaltweets()" onclick="delete_tweet(${data[index].tweet_id})">Delete</button></li>
 
             </ul>
                     <ul class="stats">
                         <li><a href="#"></a></li>
                         <li><div id="error"></div></li>
                         </ul>
                        <div class="icon solid fa-heart" style="color:red" onmouseleave="displaytweets()" onclick="glow(${data[index].tweet_id})" ></div></div>
                        &nbsp;&nbsp;&nbsp;
                        <div id="likeno" class="countno">${data[index].likecount}</div>
                        <div id="error"></div>
                 </footer></article>`;
             }
         }
   // //console.log(data[index].tweet_id);
         t = ""; 
         tweet_time ="";
        });
     
        $('#post').html(html);
      
       
    })
    .fail(function(jqxhr,textStatus,err){
        //console.log('Ajax error',textStatus);
    });
}
function glow(tweet_id) {
//console.log("hihihi");
    var likecount=1;
    //var name =name;
   // alert("hi");
   // //console.log("tweet_id is"+likecount);
    senddata = {
        tweet_id:tweet_id,
       name:name
    }
    //console.log("formdata is"+JSON.stringify( senddata));

    // ////console.log(formdata.user_handle);
    $.ajax({
        type: "POST",

        url: window.location + "/like",
        data: senddata,
        datatype: 'json'

    })
        .done(function (data) {

            //console.log("data is in like"+data);
            if (data.length ==0)
       {
        //document.getElementById("error").innerHTML=` `;

        likepost(tweet_id);

          
       }
       else{
       // document.getElementById("error").innerHTML=`You have already liked this post`;
           
       }
        })
        .fail(function (jqxhr, textStatus, err) {
           //console.log('Ajax error',textStatus);
        });


}

function likepost(tweet_id) {
    var likecount=1;
    //var name =name;
   // alert("");
    //console.log("tweet_id is"+likecount);
    senddata = {
        tweet_id:tweet_id,
       name:name
    }
    //console.log("formdata is"+JSON.stringify( senddata));

    // ////console.log(formdata.user_handle);
    $.ajax({
        type: "POST",

        url: window.location + "/likepost",
        data: senddata,
        datatype: 'json'

    })
        .done(function (data) {

           //likepost(tweet_id);

        })
        .fail(function (jqxhr, textStatus, err) {
           //console.log('Ajax error',textStatus);
        });


}

function bodyimage() {


}
function following(name){
   var post_data={
       name:name

   }
   //console.log("name is"+name);
    $.ajax({
        type: "get",

        url: window.location + "/following",
        data: post_data,
        datatype: 'json'

    })
        .done(function (data) {
            following_no =data.length;
            //console.log("following data is"+following_no);
            document.getElementById("follow").innerHTML=`<a href="#" class="icon solid fa-users followers">followers ${followers_no}</a>
            <a href="#" class="icon solid fa-users following">following ${following_no}</a>`;


        })
        .fail(function (jqxhr, textStatus, err) {
            //console.log('Ajax error', textStatus);
        });


}

function followers(name){
    var post_data={
        name:name
 
    }
    //console.log("name is in followers"+name);
     $.ajax({
         type: "get",
 
         url: window.location + "/followers",
         data: post_data,
         datatype: 'json'
 
     })
         .done(function (data) {
             followers_no =data.length;
             //console.log("follower data is"+followers_no);
             document.getElementById("follow").innerHTML=`<a href="#" class="icon solid fa-users followers">followers ${followers_no}</a>
             <a href="#" class="icon solid fa-users following">following ${following_no}</a>`;
 
 
         })
         .fail(function (jqxhr, textStatus, err) {
             //console.log('Ajax error', textStatus);
         });
 
 
 }
//localStorage.setItem("vOneLocalStorage", imageurl);
function mainfunc() {
following(name);
followers(name);
display();

    var post_data = {
        user_handle: name


    }

    $.ajax({
        type: "get",

        url: window.location + "/editprofileget",
        data: post_data,
        datatype: 'json'

    })
        .done(function (data) {
            imageonload = data[0].profile_image;

            //console.log(imageonload);
            var image = document.getElementById('profile_image');
            if(imageonload){
                console.log("img exist");
            image.src = imageonload;

            }
            else{
                image.src=`home/profile_image/default_profile.jpeg`;
            }
            //console.log();
            //console.log("data is" + data[0].profile_image);


        })
        .fail(function (jqxhr, textStatus, err) {
            //console.log('Ajax error', textStatus);
        });

    ////console.log("it is"+JSON.stringify(imageonload));
    var readURL = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                //console.log("it is" + imageonload);
                $('.profile-pic').attr('src', e.target.result);

            }

            reader.readAsDataURL(input.files[0]);
            imageurl = input.files[0].name;
            //console.log(imageurl);
            editprofile();
        }
        else {

        }
    }


    $(".file-upload").on('change', function () {
        //  //console.log("it is"+imageonload);

        readURL(this);
        //////console.log(this);
    });

    $(".upload-button").on('click', function () {
        $(".file-upload").click();
    });
}
function get() {
    formdata = {
        user_handle: $("#Userhandle").val(),
        password: $("#userPass").val()
    }
    if (formdata.user_handle == '' || formdata.password == '') 
    {
        //alert("enter your login credentials");
        var message = "Enter your login credentials";
        var h ="";
        h +=`<p style="color:#FF6666;font-size:0.75em;">${message}</p>`
        $("#errormessage").html(h);
    }
    else{

    // ////console.log(formdata.user_handle);
    $.ajax({
        type: "POST",

        url: window.location + "ajaxLogin",
        data: formdata,
        datatype: 'json'

    })
        .done(function (data) {
            // var datanew = data;

            // name = data[0].Name;
            // idval = data[0].user_id;
            // //console.log(data);

            if (data == '')
            {
                var message = "Invalid userHandle or Password";
                var h ="";
                h +=`<p style="color:#FF6666;font-size:0.75em;">${message}</p>`
                $("#errormessage").html(h);
            }

            else
            {
                name = data[0].Name;
                idval = data[0].user_id;
            // ////console.log(datanew[0].Name);
            $('#getResponse').html(name);
            // window.location.href = `http://localhost:3000/home/${name}`;
            window.location.href = `http://localhost:7000/home/${name}`;


            }


        })
        .fail(function (jqxhr, textStatus, err) {
            ////console.log('Ajax error',textStatus);
        });
    }
}
var vOneLS = localStorage.getItem("vOneLocalStorage ");



function editprofileget() {


}

function clear_disp() {
    $('#searchname').val("");
   $('#dispsearch').html("");
    $('#dispsearchHash').html("");
    $('#dispsearch1').html("");
}




function editprofile() {
    
    var path = "home/profile_image/";
    // ////console.log(imageurl);
    var post_data = {
        user_handle: name,
        profile_image: path + imageurl
        // hashtag:$("#hashtag").val(),
        // media : $("#media").val(),
        // userhandle : name

    }
    ////console.log(post_data);
    // ////console.log(post_data);
    $.ajax({
        type: "put",

        url: window.location + "/editprofile",
        data: post_data,
        datatype: 'json'

    })
        .done(function (data) {
            ////console.log("data is"+data);


            // $('#result').html("invalid user_handle and password");


            //  $('#result').html(JSON.stringify(data));







        })
        .fail(function (jqxhr, textStatus, err) {
            //console.log('Ajax error', textStatus);
        });

    // ////console.log(formdata.user_handle);
    ////console.log(`name is ${name}`);

    ////console.log("edit me");
}
display();


var imgname;
function getHashTags(inputText) {
    var regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
    var matches = [];
    var match;

    while ((match = regex.exec(inputText))) {
        matches.push(match[1]);
    }
    var hash = matches.toString();
    return hash;
}
function post_tweet() {
    document.getElementById("postid").style.visibility = "visible";
    var path = "home/profile_image/";
    var post_text = $("#post_text").val();
    if (post_text == '')
    {
        alert("  please enter data to be posted ");
        //$('#postid').html("please enter your tweet");
    }
    else {
    var file = document.querySelector('input[type=file]').files[0];
    //console.log("imgnmae " + file);
    var txt1 = txt;
    console.log("txt is"+txt1);
    var hash = getHashTags($("#post_text").val());
    var post_data = {

        post_text: $("#post_text").val(),
        hashtag: hash,
        media: path + txt1,
        userhandle: name

    }
    $.ajax({
        type: "POST",

        url: window.location + "/tweets",
        data: post_data,
        datatype: 'json'

    })
        .done(function (data) {
            // $('#result').html("invalid user_handle and password");
            ////console.log(data);
            reset_tweet();
            alert("Posted Successfully");

            $('#result').html(JSON.stringify(data));
         })
        .fail(function (jqxhr, textStatus, err) {
            ////console.log('Ajax error',textStatus);
        });

    }
    document.getElementById("postid").style.visibility = "hidden";
}
//document.getElementById("postid").style.visibility = "hidden";

function tweetfunction() {
    // document.getElementById("postbutton").style.visibility = "hidden";

    document.getElementById("postid").style.visibility = "visible";
    return;

}
function reset_tweet() {
    $("#post_text").val("");

    $("#media").val("");
}


function searchglobal() {
    var html = "";
    var searchname = $("#searchname").val();

    var n = searchname.startsWith("#");
    //console.log(n);
    if (n == true) {
        //console.log("hashtag if");
        search_hashtag();
    }
    else {
        //console.log(" i m in else")
        var send_search = {
            searchname: $("#searchname").val(),
            name:name

        }
        //console.log("it is send"+JSON.stringify( send_search));
        $.ajax({
            type: "POST",

            url: window.location + "/searchprofile",
            data: send_search,
            datatype: 'json'

        })
            .done(function (data) {
                var n = data.length;

                if (n === 0) {
                    //console.log(n);
                  //  $('#dispsearch').html("");
                   // document.getElementById("dispsearch1").style.visibility = "hidden";

                }
                ////console.log(data.length);

                ////console.log(typeof(data));
                else {
                    //console.log("it is printed"+JSON.stringify(data));
                    $.each(data, function (index, value) {
//console.log("hihihi");
                        html += `
                

                    <span class="name"><img src="${data[index].profile_image}" alt="" height="30" width="30px" />${data[index].Name}</span>
                        <button class="button button4" id="followerbutton" onclick="follow(${data[index].user_id})">Follow</button>
                `;
                    });
                   document.getElementById("dispsearch").style.visibility = "visible";
                
                    $('#dispsearch').html(html);
                   // document.getElementById("dispsearch").style.visibility = "hidden";

                }
            })
            .fail(function (jqxhr, textStatus, err) {
                
                ////console.log('Ajax error', textStatus);
            });
            $.ajax({
                type: "POST",
    
                url: window.location + "/searchprofileunfollow",
                data: send_search,
                datatype: 'json'
    
            })
                .done(function (data) {
                    var n = data.length;
    
                    if (n === 0) {
                        //console.log(n);
                       //$('#dispsearch').html("");
                    }
                    ////console.log(data.length);
    
                    ////console.log(typeof(data));
                    else {
                        $.each(data, function (index, value) {
    
                            html += `
                        
    
                        <span class="name"><img src="${data[index].profile_image}" alt="" height="30" width="30px" />${data[index].Name}</span>
                            <button class="button button4" id="followerbutton" onclick="unfollow(${data[index].user_id})">unFollow</button>
                    `;
                        });
                   document.getElementById("dispsearch").style.visibility = "visible";

                        $('#dispsearch').html(html);
                        //document.getElementById("dispsearch1").style.visibility = "hidden";

                    }
                })
                .fail(function (jqxhr, textStatus, err) {
                    
                    ////console.log('Ajax error', textStatus);
                });

    }

}


function searchglobalunfollow() {
   

}



function follow(index){
   $('#dispsearch').html("");

    //console.log("sfhvajsf"+index);
    var user_handle = name;
   
    var index1 = {
        user_handle:user_handle,
        index: index

    }
    //console.log(index);
    $.ajax({
        type: "POST",

        url: window.location + "/follow",
        data: index1,
        datatype: 'json'

    })
        .done(function (data) {
            //console.log("done");
            
        })
        .fail(function (jqxhr, textStatus, err) {
            //console.log('Ajax error', textStatus);
        });
        $('#searchname').val("");
    // $('#dispsearch').html("");
    $('#dispsearchHash').html("");
    $('#dispsearch1').html("");


}

function unfollow(index){
   $('#dispsearch').html("");

    //console.log("sfhvajsf"+index);
    var user_handle = name;
   
    var index1 = {
        user_handle:user_handle,
        index: index

    }
    //console.log(index);
    $.ajax({
        type: "delete",

        url: window.location + "/unfollow",
        data: index1,
        datatype: 'json'

    })
        .done(function (data) {
            //console.log("done");
            
        })
        .fail(function (jqxhr, textStatus, err) {
            //console.log('Ajax error', textStatus);
        });
        $('#searchname').val("");
   // $('#dispsearch').html("");
    $('#dispsearchHash').html("");
    $('#dispsearch1').html("");


}

function search_hashtag() {
    var html ="";
    //console.log("search hashtag");
    var searchname = $("#searchname").val();
    var send_search = {
        searchname

    }
    $.ajax({
        type: "POST",

        url: window.location + "/searchhashtag",
        data: send_search,
        datatype: 'json'

    })
        .done(function (data) {
            if(data.length === 0)
            {
                $('#dispsearch').html("NOT FOUND");
            }

            else{
                $.each(data, function (index, value) {
//console.log(data[index].media);
                    html+=`
                    
                  <center>  @${data[index].userhandle}</center><br>
                  <center>   <span class="name"><iframe src="${data[index].media}" height="100" style="width:100px"></iframe><br>${data[index].post_text}<br></span> <center>  
                        
                `;
                            });
                   document.getElementById("dispsearch").style.visibility = "visible";

            $('#dispsearch').html(html);
            }
        })
        .fail(function (jqxhr, textStatus, err) {
            //console.log('Ajax error', textStatus);
        });


}




function retweet(index){
    //console.log("retweet ajax");
    var user_handle = name;
    
    //console.log("tweet id is"+index);
var post_data ={
    //user_id:id,
    user_handle,
    tweet_id:index

}
//console.log(post_data);

    $.ajax({
        type:"POST",
        
        url:window.location +"/retweet",
        data : post_data,
        datatype:'json'

    })
    .done(function(data){

       if (data.length ==0)
       {
           retweetpost(index);
       }
      
    })
    .fail(function(jqxhr,textStatus,err){
        //console.log('Ajax error',textStatus);
    });

}

function retweetpost(index){
    //console.log("retweet ajax");
    var user_handle = name;
    
    //console.log("tweet id is"+index);
var post_data ={
    //user_id:id,
    user_handle,
    tweet_id:index

}
//console.log(post_data);

    $.ajax({
        type:"POST",
        
        url:window.location +"/retweetpost",
        data : post_data,
        datatype:'json'

    })
    .done(function(data){

      
      
    })
    .fail(function(jqxhr,textStatus,err){
        //console.log('Ajax error',textStatus);
    });

}

function logout()
{
    window.location.href = `http://localhost:4000/`;

}










