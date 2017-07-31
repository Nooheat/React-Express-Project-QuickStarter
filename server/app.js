var express = require('express');
var path = require('path');
var config = require('./config');
var static = require('serve-static');
var session = require('express-session');
var database = require('./database/database');
var bodyparser = require('body-parser');
var crypto = require('crypto');
var fileUpload = require('express-fileupload');
var app = express();

app.use(express.static(path.resolve(__dirname, '../react-app', 'build')));

app.use(bodyparser.urlencoded({
    extended: false
}));

app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, '../react-app', 'build', 'index.html'));
});

// session configuration
app.use(session({
    key: 'entrykey',
    secret: 'secret',
    resave: false
}));

app.use(bodyparser.json());

app.listen(config.server_port, function () {
    console.log(config.server_port + ' ON');
    database.init(app, config);
});
