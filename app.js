const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post')

app.get('/',(req,res)=> {
  res.send("welcome dear");
})

app.get("/create",async (req,res)=>{
  let user = await userModel.create({
    username : "alishba",
    email:"alishba@gmail.com",
    age: 25
  })
  res.send(user);
})

app.get("/post/create",async (req,res)=>{
  let post = await postModel.create({
    postdata : "hello post ban rhi h  ?",
    user: "66c7299b2f3c2f02a7921fa8"
  })
  let user = await userModel.findOne({_id:"66c7299b2f3c2f02a7921fa8"});
  user.posts.push(post._id);
  await user.save();
  res.send({post,user});
})

app.listen(3000);