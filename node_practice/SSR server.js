//20240708 SSR server.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to the Home Page</h1><nav><a href="/about">About</a><a href="/contact">Contact</a></nav>`);
});

app.get('/about', (req, res) => {
    res.send(`<h1>About Us</h1><nav><a href="/">Home</a><a href="/contact">Contact</a></nav>`);
});

app.get('/contact', (req, res) => {
    res.send(`<h1>Contact Us</h1><nav><a href="/">Home</a><a href="/about">About</a></nav>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});