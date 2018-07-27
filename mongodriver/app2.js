const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  
  /* InsertDocument(db, function(){
    client.close();
  }); */
  /* InsertDocuments(db, function(){
    client.close();
  });*/ 
  FindDocuments(db, function(){
    client.close();
  });

  client.close();
});

const InsertDocument = function(db, callback){
    // get Collection
    console.log("hello")
    const collections = db.collection("users");

    collections.insert({
        name:"Dimas",
        email:"alhusna901@gmail.com"
    },function(err,result){
        if(err)
        {
            return console.dir(err);
        }
        console.log("Inserted document");
        console.log(result);
        callback(result); 
    })
}

const InsertDocuments = function(db, callback){
    //get Collection 
    const collection = db.collection("users");

    collection.insertMany([
        {
            name:"Dimitri Wahyudiputra",
            email:"dimitri@gmail.com"
        },
        {
            name:'Awtian Akbar',
            email:"awtian.akbar@gmail.com"
        }
    ],function(err,result){
        if(err)
        {
            return console.dir(err);
        }
        console.log("Inserted"+result.ops.length+" documents");
        console.log(result);
        callback(result); 
    });
}

const FindDocuments = function(db, callback){
    // Get Collection 
    const collection = db.collection("users");

    collection.find({}).toArray(function(err,docs){
        if(err)
        {
            return console.dir(err);
        }
        console.log(" Found the following records");
        console.log(docs);
        callback(docs);
    });
}