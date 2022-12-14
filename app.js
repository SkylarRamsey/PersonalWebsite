const express = require('express');
const app = express();
const path = require('path')
const port = 3000;

//set view engine as ejs to expect ejs files to render
app.set('view engine', 'ejs');
//set views file that express looks for to render ejs files to the path
//of the directory of this file in the subfolder called views
app.set('views', path.join(__dirname, 'views'));
//allow app to pull from public directory
app.use(express.static(__dirname + '/public'));
//app.get methods
//render file given on get request
app.get('/', function(req, res){
    res.render('home');
})

app.get('/resume', function(req, res){
    res.render('resume');
})

// app.get('/coolAnimals', function(req, res){
//     res.render('coolAnimals');
// })

app.get('/contact', function(req, res){
    res.render('contact');
})
// app.get('/christmas', function(req, res){
//     res.render('christmas');
// })
//route error handler at the end
app.get('*', function(req, res){
    res.status(404).send('what???');
  });
//give local port to serve
app.listen(port, function(){
    console.log('running on port 3000');
})
