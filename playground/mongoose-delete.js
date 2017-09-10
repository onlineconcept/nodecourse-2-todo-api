const {ObjectID} =require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59b57557f9009832b8b89a70';

if(!ObjectID.isValid(id)){
    return console.log("Id is invalid");
}

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

Todo.findOneAndRemove('59b58ae6acd9a595fda69d2f').then((todo)=>{
    console.log(todo);
});