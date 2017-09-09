// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB server");
    // db.collection('Todos').find({
    //     _id: new ObjectID('59b453f40f43e786dafd6654')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err)=>{
    //     console.log("Unable to fetch todos",err);
    // });
    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count: ${count}`);
    }, (err)=>{
        console.log("Unable to fetch todos",err);
    });
    db.collection('Users').find({name:/Thomsen/}).toArray().then((docs)=>{
        console.log(docs);
    })
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