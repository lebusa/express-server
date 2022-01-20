# Basic Express Server

Express.js is a fast, unopinionated, minimalistic Node.js web frawework. It simplifies common and often repetive idioms in Node.js into simple steps. 

This project shows a basic express server for Node.js.

## Installation

To start using express in your Node.js project, you first have to install it from the Node Packages Manager (npm) repository online, popularly known as the [npm registry](https://www.npmjs.com/). Type the following in your terminal to include express in your project (assuming you have initialized a Node.js project already).

`$ npm install express`

## Express Server Code

Create a server file (server.js) and add the following code:

<pre>
<code>
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Express web server');
});

app.listen(3000);
</code>
</pre>

These lines create a basic express server with one root route that responds with 'Express web server' when it receives requests.

There is a faster method for creating an express server is via an express generator.

## Author

Motebang Lebusa

## License

This project is licensed under the terms of the MIT license.
