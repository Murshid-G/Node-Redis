const express = require('express');
const dbconnect = require('./mongodb');
let app = express();


app.get('/',async(req,res)=>{
    let data = await dbconnect();
      data =  await data.find().tpArray()
  res.send(data)
})
app.listen(6000);
