const express = require('express');
const body_parser = require('body-parser');
const app = express();
const port = 8080;
app.use(body_parser.urlencoded({extended: true}))

app.set('view engine', 'ejs');

var today = new Date();
var day = today.getDay();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;


app.get('/', (req, res) => {
    switch(day){
        case 0:
            res.render('index', {days: "Sunday", month: mm, year: yyyy});
            break;
        case 1:
            res.render('index', {days: "Monday", month: mm, year: yyyy});
            break;
        case 2:
            res.render('index', {days: "Tuesday", month: mm, year: yyyy});
            break;
        case 3:
            res.render('index', {days: "Wednesday", month: mm, year: yyyy});
            break;
        case 4:
            res.render('index', {days: "Thursday", month: mm, year: yyyy});
            break;
        case 5:
            res.render('index', {days: "Friday", month: mm, year: yyyy});
            break;
        case 6:
            res.render('index', {days: "Saturday", month: mm, year: yyyy});
            break;
    }
});

app.get('/',(req, res)=>{
    res.send(today);
})

app.listen(port,()=>{
    console.log('server running on port '+port);
})