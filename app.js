const express = require('express');
const body_parser = require('body-parser');
const { todo } = require('node:test');
const app = express();
const port = 8080;
app.use(body_parser.urlencoded({extended: true}))

app.set('view engine', 'ejs');

var todos =["hey"];
var today = new Date();
var options = {
    weekDay: "long",
    day: "numeric",
    month: "long"
}
var day = today.toLocaleDateString("en-US", options);
app.get('/', (req, res) => {
    res.render('index', {days: day, ItemsList: todos});
    res.send("")
});

app.post('/',(req, res)=>{
    res.redirect('/');
})

app.listen(port,()=>{
    console.log('server running on port '+port);
})