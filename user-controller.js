var User = require('./models/user');

/* CRUD Functions */

exports.creatUser = function(req, res){
    var newUser = new User(req.body); //Check needs to be check (All fields are ok and not null).
    console.log('Json',req.body); //req.body is the Json file from the POST.
    newUser.save(function (err, user){
        if (err) {
            console.log(err);
            res.status(400).json(err);
        }
        else 
            res.json({New_User:user});
    })
};
 
exports.getUser = function(req, res){
   User.find({email: req.params.email},function(err,user){
    console.log(req.params.email);
    if (err) {
        console.log(err);
        res.status(400).json(err);
    }
    else
        res.json(user);
   });
};

exports.login = function(req, res){
    User.find({email: req.body.email, password: req.body.password}, function(err,user){
     if (err) {
         console.log(err);
         res.status(400).json(err);
     }
     else{
         if(user.length === 0) //No User matching the password and username found.
                return res.json(null);
            else
                res.json(user);
     }
    });
 };

 exports.addTask = function(req, res){
     console.log(req.body);
    User.findOneAndUpdate({"email": req.body.email},{$push:{"tasks":req.body.tasks}},{new: true}, function(err,user){
     if (err) {
         console.log(err);
         res.status(400).json(err);
     }
     else{
         if(user === null) //No User matching the password and username found.
                return res.json(null);
            else{
                     console.log(user);

                res.json(user);
            }
     }
    });
 };

 exports. deleteTask = function(req, res){
     console.log(req.body.email);
     User.find({email: req.body.email}, function(err,user){
     if (err) {
         console.log(err);
         res.status(400).json(err);
     }
     else{
         if(user === null) //No User matching the password and username found.
                return res.json(null);
            else{
                   console.log("Taske are:");
                    console.log(user[0].tasks.splice(req.body.index,1));
                  //  (JSON.parse(user.tasks));//.splice(0, 1);
                   // console.log(user.tasks);
                    user[0].save(function(error) {
                    if (error) {
                        console.log(error);
                        res.send(null, 500);
                    } else {
                        // send the user.
                    res.json(user[0]);
                    }
                });
            }
     }
    });
 };