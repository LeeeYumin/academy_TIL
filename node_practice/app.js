//app.js

const http = require('http');

http.createServer((request, response) => {
    
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
}). listen(3000); //port 3000

console.log("Server running at http://127.0.0.1:3000");

//터미널 명령어 node app.js