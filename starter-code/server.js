'use strict';

// DONE: Initialize your project using NPM to create and populate a package.json file
const express = require('express');
const app = express();

// DONE: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency

const PORT = process.env.PORT || 3000;

// DONE: Include all of the static resources as an argument to app.use()

app.use(express.static('./public'));

app.get('index.html', function(request, response) {
    // DONE: Using the response object, send the index.html file back to the user
  response.sendFile('index.html', {root: './public'});
});

// DONE: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user

app.get('new.html', function(request, response) {
  response.sendFile('new.html', {root: './public'});
});

app.get('*', function(request, response) {
  // console.log('New request: ', request.url);
  response.status(404).sendFile('404.html', {root: './public'});
});


app.listen(PORT, function() {
  // DONE: Log to the console a message that lets you know which port your server has started on
  console.log('Server is up and running on port ' + PORT + ' and can be accessed at localhost:' + PORT);
});
