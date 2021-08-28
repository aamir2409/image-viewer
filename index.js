const express=require("express");
const bodyParser=require("body-parser");
const MongoClient=require('mongodb').MongoClient;

const url="mongodb+srv://admin-aamir:speed123@cluster0.qntvk.mongodb.net/usersDB?retryWrites=true&w=majority"
const app=express();

const client= new MongoClient(url);
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type','Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE');
    next();
})


app.get("/",async (req,res)=>{
    
        await client.connect();
       const db=client.db();
       const result=await db.collection("photos").find().toArray();
       console.log(result)

       res.json({ message: "successfully got the count", result: result})
   
})


// mongoose.connect("mongodb+srv://admin-aamir:speed123@cluster0.qntvk.mongodb.net/usersDB?retryWrites=true&w=majority")
// .then(()=>{
//     app.listen(5000);
// })
// .catch(err => {
//     console.log(err)
// });

app.listen(5000,(req,res)=>{
    console.log("server started at port 5000")
})