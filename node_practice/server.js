const express = require("express");
const app = express();
const port = 3010;

//app.use(express.static("public"));

app.get("/", (req, res, next) => {

    //서버에 header에 쿠키 넣어보기
    //res.setHeader("Set-Cookie", [username='ming2']);
    //res.cookie("username","ming3");

    //옵션에 따른 설정값. 쿠키, domain, path 등
    let options = {
        expires: new Date(Date.now() + 900000),
        HttpOnly: true,
        secure : true,
        //domain: 'www.naver.com', // localhost
        path: '/' // /public
    }
    res.cookie('lesson','glocal2024',options);
    res.end("Top Page");
});

//MPA
app.get("/sign-up", (req, res, next) => {
    res.end("Top Page");
});

app.get("/article", (req, res, next) => {
    res.end("Top Page");
});

app.get("/article/edit", (req, res, next) => {
    res.end("Top Page");
});

app.get("/article/{num}", (req, res, next) => {
    res.end("Top Page");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});