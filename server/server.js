var mongoose  = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

//Save new something
var Todo = mongoose.model('Todo',
    {
       text:{
           type: String,
           required: true,
           minlength: 1,
           trim:true
       } ,
        completed:{
            type:Boolean,
            default:false
        },
        completedAt:{
            type: Number,
            default:null
        }
});

var User = mongoose.model('User',{
   email:{
       type:String,
       required:true,
       minlength:1,
       trim:true
   }
});

// var newTodo = new Todo({
//     text:'    Edit this video'
// });
//
// newTodo.save().then((doc)=>{
//     console.log("Todo saved", doc);
// },(e)=>{
//     console.log("Unable to save todo");
// });
var user = new User({
    email:" malkavianster@gmail.com"
});

user.save().then((doc)=>{

},(e)=>{
    console.log(e);
})