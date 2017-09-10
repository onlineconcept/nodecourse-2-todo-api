const {ObjectID} =require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '59b57557f9009832b8b89a70';

if(!ObjectID.isValid(id)){
    return console.log("Id is invalid");
}

// Todo.find({
//     _id: id
// }).then((todos)=>{
//     if(todos.length == 0)
//     {
//         return console.log("Id not found");
//     }
//     console.log('Todos', todos)
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     if(!todo)
//     {
//         return console.log("Id not found");
//     }
//     console.log('Todo', todo)
// });

Todo.findById(id).then((todo)=>{
    if(!todo)
    {
        return console.log("Id not found");
    }
    console.log('Todo by id', todo)
}).catch((e)=>{
    console.log(e);
});