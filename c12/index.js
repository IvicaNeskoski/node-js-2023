const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://ivica:xpIgLCGoRLUM14s6@javascriptakademija.st1rkky.mongodb.net/JavaScripAcademy?retryWrites=true&w=majority';

mongoose.connect(connectionString);

const Users = mongoose.model(
    'users',
    {
        _id: String,
        name: String,
        last_name: String,
        date_of_birth: String
    },
    'users'
);

// read data from mongodb databse

// Users.find({}).
//     then(user => {
//         console.log(user);
//     }).catch(err => {
//         console.log(err)
//     });


// create new data in mongodb database

// let newUser = new Users({
//     _id: new mongoose.Types.ObjectId(),
//     name: "Pero",
//     last_name: "Perovski",
//     date_of_birth: new Date("1990.02.02")
// });

// newUser.save();

// update existing data in mongodb database

// Users.updateOne()
// Users.update()

// Users.updateOne({_id: "6421e7c84b16c2b10f17686f"}, {last_name: "Zlatevski"}).then(user => {
//     console.log(user);
// }).catch(err => {
//     console.log(err)
//     }); 

// Users.findOne({name: "Pero"}).
//     then(user => {
//     console.log(user.name);
//     console.log(user.last_name);
//     }).catch(err => {
//     console.log(err)
//     }); 


// Delete existing document in mongodb  database collection

Users.deleteOne({_id : "6421e7c84b16c2b10f17686f"}).
    then(user => {
     console.log(user.name + 'successfully deleted');
    }).catch(err => {
     console.log(err)
    }); 