import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>0123456789</h1>");
})

app.get("/about", (req, res) => {
    res.send("<h1>My Info</h1>");
})

app.listen(3000, () => {
    console.log(`Server running on port ${3000}.`);
})