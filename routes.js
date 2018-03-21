/*Here we define the defferent routes of our app*/

/*
-----------------------------------------------------------------
|                            Imports                            |
|                                                               |
-----------------------------------------------------------------
*/
var userCtrl = require('./user-controller');
var itemCtrl = require('./item-controller');
var express = require('express'); 
var User = require('./models/user');
router = express.Router();
//Imports


 /*
-----------------------------------------------------------------
|                            GET                                |
|                                                               |
-----------------------------------------------------------------
*/
//Routing get requests.
router.get('/hello', itemCtrl.getWorld);
//Getting parameters.
router.get('/users/:user/:pass', function(req,res) {
    console.log('req:',req);
    //const user_collection = clientsa.db("toDoListAppDB").collection("users");
/* INSERT myobj to users collection*/
var myobj = { userName_1: "NivFaida", password: "123123", tasks: ['Task1','Task2']};
//user_collection.insertOne(myobj, function(err){
 //   if(er) console.log('err in inserting to collection:' + err);
   // else console.log("1 document inserted");
 //   client.close();
//});
    res.json({result: 'Get sent back with Data', data: req.body });
    //res.json({result: 'Get sent with variabels',data :[req.params.user, req.params.pass]});
});
router.get('/users/:email', userCtrl.getUser);

//GET
//router.get('/helloo', User.creatUser());
/*{
var newUser = new User({email:'niv',password:'s'}); //Check needs to be check (All fields are ok and not null).
//User.create({ email: 'small',password: 'sd' }, function (err, small) {
   // if (err) return handleError(err);
    // saved!
//});
newUser.save(function (err, user){
    if (err)
        console.log(err);
    else {
        console.log(newUser);
        res.json({New_User:user});
    }
});
});
*/
 /*
-----------------------------------------------------------------
|                            POST                               |
|                                                               |
-----------------------------------------------------------------
*/
//Routing post requests.
router.post('/hello', function(req,res) {
    res.json({result: 'Post sent with Data', data: req.body });
});

router.post('/users',userCtrl.creatUser);
router.post('/users/login',userCtrl.login);
router.post('/tasks/addTask',userCtrl.addTask);
router.post('/tasks/delete',userCtrl.deleteTask);


//POST


//Export the router variable to our module (module is the global scope variable inside a file.)
//exports is a variable that lives on module.exports.
// It's basically what you export when a file is required (and we required it on the server.js).
module.exports = router;

/*Read More about this line on SOF - 
https://stackoverflow.com/questions/6116960/what-do-module-exports-and-exports-methods-mean-in-nodejs-express
*/