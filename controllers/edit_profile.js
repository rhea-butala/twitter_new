const express=require('express');
const app = express();
const Joi = require('joi');
var mysql= require('mysql');
var bodyParser = require('body-parser');
//var routes = require('./route.js');
var connection= require('../connect.js');
var session = require('express-session');
var path = require('path');
var bcrypt = require('bcrypt');
app.use(bodyParser.json());


"use strict"

class edit_profile{
    edit_profile(request, response){
        var post_text = request.body.post_text;
       // var hashtag= request.body.hashtag;
        
       // var media = request.body.media;
        var userhandle = request.body.userhandle;
        console.log(userhandle);
        console.log(post_text);
        console.log("hiiiiii");
    
        const  tweet ={
            post_text,
            //hashtag,
            userhandle
            //media
            
           // user_handle 
    
        }
        console.log(tweet);
    
        console.log(tweet.post_text);
        console.log(tweet.userhandle);
    
    
        connection.query('Insert into tweets set ?',[tweet])
        response.send("bye");
    
    
    
    }
    
}
module.exports = edit_profile;
