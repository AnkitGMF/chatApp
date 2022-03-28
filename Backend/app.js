const express = require('express');
const cookieParser = require('cookie-parser');
const userRoute = require('./Routes/user');
const chatRoute = require('./Routes/chat');
// const cookieParser = require('cookie-parser');

const app = express();
const port = 5000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser())
app.use(express.static('../frontend/public'));
app.use('/api/v1',userRoute);
app.use('/api/v1',chatRoute);


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}....`);
})