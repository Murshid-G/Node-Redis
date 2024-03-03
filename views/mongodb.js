const { connect } = require('http2');
const {MongoClient}=require('mongodb');
const url = 'mongodb:.//localhost:27017';
const database = "test";
const client = new MongoClient (url);

   async function dbconnect(){
    let result =await client.connect();
    const db = result.db('database');
    const collection = db.collection('emp');
    
   }
    const main =async ()=>{
        let data = await dbconnect();
        data = await data.find().tpArray()
        console.log(data);
    }
    main()