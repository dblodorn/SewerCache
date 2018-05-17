const express = require('express');
const app = express();
const server = require('http').Server(app);
const browserify = require('browserify-middleware');
const path = require('path');

// ENVIRONMENT VARIABLES
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

console.log(
  process.env.TEST_ENV,
  process.env.NODE_ENV
);

// APP SETUP
app.set('view engine', 'pug');
app.use("/assets", express.static(__dirname + '/assets'));

// BROWSERIFY
browserify.settings({
  insertGlobals: true,
  transform: [
    'babelify'
  ]
});
app.get('/dist/app.js', browserify(__dirname + '/js/client/index.js'));

// STATIC DIRECTORY
app.imgDir = '/images';
app.use(app.imgDir, express.static(__dirname + app.imgDir));

// APP ROUTES
app.get('/', (req, res) => {
  res.render('index', {
    env: process.env.NODE_ENV,
    title: 'SEWER CACHE :: COMING SOON'
  })
})

// SERVER
server.listen(PORT, () => {
  console.log(`Running SEWER_CACHE on port ${PORT}`);
})