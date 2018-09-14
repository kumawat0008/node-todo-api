const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect mongodb');
  }
  console.log('mongodb connection established');
  const db = client.db('TodoApp');

 // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
 //   console.log(JSON.stringify(docs,undefined,2));
 // },(err)=>{
 //   console.log('Unable to fetch todos',err);
 // });

 db.collection('Todos').find().count().then((count)=>{
   console.log(`Todos count`,count);
 },(err)=>{
   console.log('Unable to fetch todos',err);
 });
  //client.close();
});
