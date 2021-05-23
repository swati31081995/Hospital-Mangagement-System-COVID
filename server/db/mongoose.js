var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
//mongoose.connect("mongodb://admin:admin123@ds145220.mlab.com:45220/nhs-app");
//mongoose.connect("mongodb+srv://swati3108:Neena123@@cluster0.a6now.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
//const uri = "mongodb+srv://swati3108:Neena123@@cluster0.a6now.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" ;
//const uri = "mongodb://admin:admin123@ds145220.mlab.com:45220/nhs-app" ;
//const uri = "mongodb+srv://swati3108:Neena123@@cluster0.a6now.mongodb.net/HMS_DATABASE" ;

//const MongoClient = require('mongodb').MongoClient;

const {MongoClient} = require('mongodb');


// async function main(){
//   /**
//    * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
//    * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
//    */
   const uri = "mongodb+srv://Swati:Neena@123@cluster0.xesay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


//   const client = new MongoClient(uri);

//   try {
//       // Connect to the MongoDB cluster
//       await client.connect();

//       // Make the appropriate DB calls
//       await  listDatabases(client);

//   } catch (e) {
//       console.error(e);
//   } finally {
//       await client.close();
//   }
// }

// main().catch(console.error);


mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {  console.log('MongoDB Connected…')}).catch(err => console.log(err));


module.exports = {mongoose};
