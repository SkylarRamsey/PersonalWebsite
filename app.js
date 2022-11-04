const express = require('express');
const app = express();
const path = require('path')
const port = 3000;

//set view engine as ejs to expect ejs files to render
app.set('view engine', 'ejs');
//set views file that express looks for to render ejs files to the path
//of the directory of this file in the subfolder called views
app.set('views', path.join(__dirname, 'views'));
//app.get methods
//render file given on get request
app.get('/', function(req, res){
    res.render('home');
})

app.get('/projects', function(req, res){
    res.render('projects');
})

app.get('/resume', function(req, res){
    res.render('resume');
})

app.get('/coolAnimals', function(req, res){
    res.render('coolAnimals');
})

app.get('/contact', function(req, res){
    res.render('contact');
})
//give local port to serve
app.listen(port, function(){
    console.log('running on port 3000');
})
