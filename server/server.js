import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import multer from 'multer'
import notes from './routes/Notes_routes.js'
import color from './routes/color_routes.js'
import recycleBin from './routes/RecycleBin_route.js'
import nodemailer from 'nodemailer'

const PORT = 8080;
const app = express();


const Transport = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'kingongo233@gmail.com',
        password:'kingongo'
    }
});

const mailDetails = {
    from:'kingongo233@gmail.com',
    to:'kingongomwangi@gmail.com',
    subject:'The Google Notes App works',
    text:'I am using Nodemailer to create a server to send emails to clients to mail app'
}

Transport.sendMail(mailDetails,(err,result)=>{
    if(err){
        console.log('Error sending Email',err)
    }
    else{
        console.log('Email sent Successfully')
    }
})

mongoose.connect("mongodb://localhost:27017/notes_crud")
.then(()=>{
    app.use(express.json())
    app.use(cors());
    app.use('/notes',notes);
    app.use('/color',color);
    app.use('/recycleBin',recycleBin);

    app.listen(PORT,()=>console.log(`App is running on port ${PORT}`))
    console.log("Db connected Successfully")
})
.catch((err)=>{
    console.log("Error connecting Database")
})






 //import http from 'http'
import fs from 'fs'

// const server = http.createServer((req,res)=>{
//   if(req.url === '/'){
//     res.write("Welcome to our page");
//     if(req.method === 'GET'){
//         res.write({"users":["user 1","user2"]})

//     }
//   }
//   else if(req.url === '/about'){
//     res.write("Our about page");
//   }
//   res.end();
// })
// console.log("Start Here")
//  const newFile = fs.writeFile('./Otherfile.txt','Here we are...',{flag:'a'},(err,result)=>{
//      if(err){
//          console.log(err)
//      }
//      else{
//          console.log(result)
//      }
//  })
//  console.log("End Here")
//  console.log("Start Here")
//  const readFile = fs.readFile('./newfile.txt','utf-8',(err,result)=>{
//      if(err){
//          console.log(err)
//      }
//      else{
//          console.log(result)
//      }
//  })
// console.log("End Here")

// server.listen(8080,()=>console.log('App is running...'))