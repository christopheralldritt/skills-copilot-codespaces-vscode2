//Create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

//Setup the static directory to serve
app.use(express.static(path.join(__dirname, 'public')));

//Setup body-parser
app.use(bodyParser.urlencoded({ extended: false }));

//Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Setup routes
const index = require('./routes/index');
const comments = require('./routes/comments');
app.use('/', index);
app.use('/comments', comments);

//Start the server
app.listen(port, () => console.log(`Listening on port ${port}`));