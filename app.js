const express = require('express');
const body_parser = require('body-parser');
const app = express();
const port = 8080;
app.use(body_parser.urlencoded({extended: true}))

app.get('/',(req, res)=>{
    res.send("server connected");
})

app.listen(port,()=>{
    console.log('server running on port '+port);
})