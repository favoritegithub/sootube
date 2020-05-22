const express = require('express');
const app = express();

const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
    console.log(req);
    res.send("Hello From Home!");
}

function handleProfile(req, res) {
    res.send("Hello From Profile!");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);