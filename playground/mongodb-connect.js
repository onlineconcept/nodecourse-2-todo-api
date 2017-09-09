// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB server");

    // db.collection('Todos').insertOne({
    //     text:'Something todo',
    //     completed: false
    //
    // },(err,result)=>{
    //     if(err)
    //     {
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     name: "Klaus Pedersen",
    //     age:38,
    //     location:"Esberg"
    // },(err,result)=>{
    //     if(err)
    //     {
    //         return console.log("Unable to insert User");
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});