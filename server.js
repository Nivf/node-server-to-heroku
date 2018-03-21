//These are all required imports - Express is the FrameWork of the server.
var logger = require('morgan'),
cors = require('cors'),
http = require('http'),
express = require('express'),
bodyParser = require('body-parser'),
mongoose = require('mongoose');
cors = require('cors');
 
//The server app
var app = express();
var port = process.env.PORT || 5001;
app.use(cors());

//For enviorment file.
require('dotenv').config(); 

//Middlewares - Will call only app.use() functions on each GET/POST/Etc... requests.
        /*My Middlewares*/
    app.use(function (req, res, next){
    console.log('Time: ', Date.now());
    next(); //This is very important to keep the request alive and forward it to the next line.
    //res.end('what ever data'); //To end the request.
    });/*My Middlewares*/ 
    
if(process.env.NODE_ENV === 'development')
    {
    app.use(logger('dev'));
    }
app.use(bodyParser.json());
app.use('/api',require('./routes')); //returns the router.
//Middlewares

mongoose.connect(process.env.MONGODB_URI, {
	server: {
		socketOptions: {
			keepAlive: 1
		}
	}
}).connection;


mongoose.connection.on('error', (err) => {
    console.log('Mongodb Error: ', err);
    process.exit();
});
 
mongoose.connection.on('connected', () => {
    console.log('Mongodb Connected to: ', process.env.MONGODB_URI);
});

app.listen(port, function(err){
    console.log('Listening on http://localhost:' + port);   
});

var db;


/*
MongoClient.connect(process.env.MONGODB_URI,function(err, client){
    if(err) return console.error(err);
    else{
        db = client;
        module.exports =
        function(db) {
                return db;
        }

    }
});*/
