// const mongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB server");

    //delete Many
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //    console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //      console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id:new ObjectID('59b45336a84ea6192803474e')}).then((result)=>{
       console.log(result);
    });
    db.close();
});