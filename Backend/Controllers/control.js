const {v4} = require('uuid');

let messages = [];
let user = new Map();

const newUser = (req,res)=>{
    const userID = v4();
    user.set(userID,req.body.name);
    res.cookie('id',userID,{expires: new Date(Date.now + 8*3600000)}).json({success:true,name:req.body.name});
}

const sendMessage = (req,res)=>{
    const userID = req.cookies.id;
    const msg = req.body.message;
    const time = Date.now();
    const userName = user.get(userID);
    msgObj = {id:userID,user:userName,message:msg,time:time};
    messages.push(msgObj);
    res.json({success:true});
}

const getMessage = (req,res)=>{
    const userID = req.cookies.id;
    res.json(messages);
}

module.exports = {
    newUser,
    sendMessage,
    getMessage
}