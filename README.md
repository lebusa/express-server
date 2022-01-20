# Basic Express Web Server

[Express.js](https://expressjs.com/) is a fast, unopinionated, minimalistic Node.js web framework. It simplifies building of web and mobile apps in Node.js. 

This project shows how to create a basic express server for Node.js.

## Installation

To start using express in your Node.js project, you first have to install it from the Node Packages Manager (npm) repository online, popularly known as the [npm registry](https://www.npmjs.com/).

Type the following command in your terminal to add express in your project (assuming you have initialized a Node.js project already) and hit *Enter*:

`$ npm install express`

This command will add express as a dependency in your project manifest file - *package.json* file. The associated files will be available in the *node_modules* directory created when your express package is downloaded from the npm registry.

## Express Server Code

Create a file called *server.js* and save the following code in it:

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

The code creates a basic express server, adds one route handler for the root route, to respond with the text 'Express web server' when it receives requests. The server then starts listening on port 3000.

## Run the Express Server
To start the express web server, type the following command on your terminal and hit *Enter*:

`$ node server`

The command will start your express web server, and wait for requests directed to port 3000.


## View your Express Server
Open your favorite browser and navigate to *localhost:3000*, you should be presented with a response as shown below:


![Express server screenshot](/assets/express-server.png?raw=true "Express server screenshot")


## Author

Motebang Lebusa

## License

This project is licensed under the terms of the MIT license.