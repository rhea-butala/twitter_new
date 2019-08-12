var mysql= require('mysql');
let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database: 'twitter',
    timezone:'utc',
    dateStrings:true,
    multipleStatements: true
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected");
});

module.exports =connection;