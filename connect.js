var mysql= require('mysql');
let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'abc123',
    database: 'tweet',
    timezone:'utc',
    dateStrings:true,
    multipleStatements: true
});

connection.connect(function(err){
    if(err) throw err;
    console.log("connected");
});

module.exports =connection;