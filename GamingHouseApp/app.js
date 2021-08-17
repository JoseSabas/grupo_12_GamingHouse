const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3000, ()=>{
    console.log('Server running at port 3000 ');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});