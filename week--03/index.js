const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(express.static('html'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

const mainRoutes = require('./routes/main');
const getDataRoutes = require('./routes/getData');
const myNameRoutes = require('./routes/myName');
const trackNameRoutes = require('./routes/trackName');

app.use(mainRoutes);
app.use('/getData', getDataRoutes);
app.use('/myName', myNameRoutes);
app.use('/trackName', trackNameRoutes);

app.listen(3000, () => {
    console.log('Hello, my server!');
    console.log('enter http://localhost:3000/​ to see my pages')
});