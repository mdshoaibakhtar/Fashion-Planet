const express = require("express");
const registerHelper = require("hbs");
const app = express();
const port = process.env.PORT || 3000;
const hostname = "127.0.0.1";
const path = require("path");
require("./db/conn");
const Register = require("./models/registers")
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' })
const DB = process.env.DATABASE;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.get("/",(req,res) =>{
//     res.send("Welcome To the Form");
// })


// console.log(path.join(__dirname,"/static"));
// const staticPath =path.join(__dirname,"/static");
// app.use(express.static(staticPath));


app.set("view engine", "hbs");
app.get("/index", (req, res) => {
    res.render("index");
});
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/login", (req, res) => {
    res.render("login");
});
app.get("/signup", (req, res) => {
    res.render("signup");
});
app.get("/cart", (req, res) => {
    res.render("cart");
});



//Create a new user in our data base
app.post("/register", async (req, res) => {
    try {
        // console.log(req.body.name);
        // res.send(req.body.name);

        const registeredemployee = new Register({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            address: req.body.address,
            mobile: req.body.mobile,
            email: req.body.email,
            password: req.body.password
        })

        const registered = await registeredemployee.save();
        res.render("index");
    } catch (err) {
        res.status(400).send(err);
    }
})

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({ email: email });
        //    res.send(useremail.password);
        if (useremail.password === password) {
            res.status(201).render(("index"));
        }
        else {
            res.send("Invalid Detaills");

        }

    } catch (err) {
        res.status(400).send("Invalid Details");
    }
});


app.listen(port, () => {
    console.log(`Running At http://${hostname}:${port}/index`);
})