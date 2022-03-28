const express = require('express');
const {sendMessage,getMessage} = require('../Controllers/control')

const chatRoute = express.Router();

chatRoute.get('/chat',getMessage);
chatRoute.post('/chat',sendMessage);

module.exports = chatRoute;