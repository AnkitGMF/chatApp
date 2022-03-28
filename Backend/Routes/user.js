const express = require('express');
const {newUser} = require('../Controllers/control')
const userRoute = express.Router();

userRoute.post('/user',newUser);

module.exports=userRoute;