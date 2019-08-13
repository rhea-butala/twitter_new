const express=require('express');
const app = express();
const Joi = require('joi');
var mysql= require('mysql');
var bodyParser = require('body-parser');
//var routes = require('./route.js');
var connection= require('../models/connect.js');
var session = require('express-session');
var path = require('path');
var appfunc = require('../models/user.js');
//var edit_profile = require('../controllers/edit_profile.js');

app.use(express.json());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use('/home/assets', express.static(__dirname + '/../views/assets'));
app.use('/home/images', express.static(__dirname + '/../views/images'));
app.use('/views/assets', express.static(__dirname + '/../views/assets'));
//app.use('/home/profile_image', express.static(__dirname + '/../views/js'));
app.use('/views/assets', express.static(__dirname + '/../views/assets'));
app.use('/js', express.static(__dirname + '/../views/js'));
app.use('/controllers', express.static(__dirname + '/../controllers'));

app.use('/assets', express.static(__dirname + '/../views/assets'));
app.use('/js', express.static(__dirname + '/../views/js'));
app.use('/home', express.static(__dirname + '/../views/index.html'));
//app.use('/home/:name', express.static(__dirname + '/../views/index.html'));
app.use('/home/profile_image', express.static(__dirname + '/../views/profile_image'));
app.use('/home/tweet_image', express.static(__dirname + '/../views/tweet_image'));
//app.use('/home/profile_image', express.static(__dirname + '/../views/js'));
app.use('/images', express.static(__dirname + '/../views/images'));

app.use('/images', express.static(__dirname + '/../views/images'));
// app.use('/ajaxcall', express.static(__dirname + '/views/login.html'));
app.use('/assets', express.static(__dirname + '/../views/assets'));
app.use('/css', express.static(__dirname + '/../views/css'));

app.use('/css', express.static(__dirname + '/../views/css'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
"use strict"
var vlass = new appfunc();
//var edit_profile = new edit_profile();
app.get('/', vlass.getindex);
	
     //response.render('./index.html');
// app.get('/home', function(request, response) {
// 	response.sendFile(path.join(__dirname + '/views/index.html'));
//      //response.render('./index.html');
// });
app.get('/registration.html', vlass.getregistration);
app.post('/ajaxcallindex',vlass.ajaxcallindex);

app.post('/ajaxLogin',vlass.ajaxLogin);
//app.post('/auth', vlass.postauth);
app.post('/for_pass',vlass.for_password)

app.get('/forgot_pass',vlass.forgot_pass);
app.post('/forgot_pass/emailforgotpass',vlass.emailforgotpass);
app.get('/resetpassword/:id/:token',vlass.resetpassword);
app.post('/resetpassword',vlass.resetpasswordnext);
app.post('/registration.html/auth2',vlass.postauth2);
app.post('/registration.html/auth3',vlass.postauth3);

app.post('/auth2',vlass.postauth2);

//app.get('/home/:name', vlass.gethome);
app.get('/home', vlass.gethome);

app.get('/forgot_pass.html',vlass.forgot_pass)

//app.post('/home/:name/tweets', vlass.tweets);
app.post('/home/tweets', vlass.tweets);
app.post('/home/editprofile', vlass.editprofile);
app.post('/home/editprofileget', vlass.editprofileget);
//app.post('/home/postimage', vlass.postimage);
app.post('/home/displaytweets', vlass.displaytweets);
app.post('/home/displayretweets', vlass.displayretweets);
app.post('/home/following', vlass.following);
app.post('/home/followers', vlass.followers);

app.post('/home/globaltweets', vlass.globaltweets);


app.post('/home/retweet', vlass.retweet);
app.post('/home/retweetpost', vlass.retweetpost);

app.post('/home/searchprofileunfollow', vlass.search_profileunfollow);
app.post('/home/searchprofile', vlass.search_profile);

app.post('/home/searchhashtag', vlass.search_hashtag);

app.post('/home/follow', vlass.follow);
app.post('/home/unfollow', vlass.unfollow);

app.post('/home/followercount', vlass.followercount);

app.post('/home/like', vlass.like);
app.post('/home/likepost', vlass.likepost);
app.post('/home/delete_tweet', vlass.delete_tweet);

//app.post('/home/likecountdisplay', vlass.likecountdisplay);
//app.post('/home/likecountPost', vlass.likecountPost);

const port = process.env.PORT || 8000;
app.listen(port,()=>console.log(`listening on port ${port}`));
module.exports = app;
