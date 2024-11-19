//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const password = "kathal";

var allowToPass = false;

function checkPassword(req, res, next) {

    var pass = req.body.password;
    if ((pass == password)) {
        allowToPass = true;
    }
    next();
}

app.use(bodyParser.urlencoded({ extended: true }));

app.use(checkPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (allowToPass) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        
        res.redirect("/");
    }
});

app.listen(3000, (req, res) => {
    console.log("Server is running on http://localhost:3000");
});
