import express from "express";

const app = express();
const port = 3000;

let today = new Date();
let day = today.getDay();


app.get("/", (req, res) => {
    console.log(day);
    if (day === 0 || day === 6) {
 res.render("index.ejs", {
    dayType: "weekend",
    advice: "Enjoy your weekend",
 })} else if (day === 1 || day === 2 || day === 3 || day === 4 || day === 5) {
    res.render("index.ejs", {
        dayType: "a work day",
        advice: "Focus and work",
     })
 }
});

app.listen(port, () => {
 console.log(`listening on port ${port}`);
});