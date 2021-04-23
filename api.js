const express = require('express');
const app = express();
const {
    parse,
    stringify
} = require('flatted');
const _ = require('lodash')
var firebase = require("firebase/app");
require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyBbbhDwqrIpKnKbIwy_1LnZhuqyHVmLPIc",
    authDomain: "bod-9128d.firebaseapp.com",
    projectId: "bod-9128d",
    storageBucket: "bod-9128d.appspot.com",
    messagingSenderId: "326746179561",
    appId: "1:326746179561:web:784d84b4d59c2a4cf62d78",
    measurementId: "G-VE5NFB0FF1"
};
firebase.initializeApp(firebaseConfig);

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.set('view engine', 'html');

app.get("/", (req, res) => {
        console.log(res.statusCode)
        res.redirect("/")
    })
    .post("/login", (req, res) => {
        console.log(res.statusCode)
        let user = {
            "newUser": req.body.newUser || false,
            "email": req.body.email || req.body.Remail,
            "password": req.body.password || req.body.Rpassword
        }
        let usppass = user.password
        if (user.newUser == "on") {
            //Register
            var letters = /[a-zA-Z]/g
            var numbers = /[0-9]/g
            var symbols = /\W/g
            if ((usppass.length >= 8) && (usppass.length <= 20) && (usppass.match(letters)) && (usppass.match(numbers)) && (usppass.match(symbols))) {
                //pass
                firebase.auth().createUserWithEmailAndPassword(user.email, usppass)
                    .then((userCredential) => {
                        // Signed in 
                        var user = userCredential.user

                    
                        res.redirect("/")
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        console.log(errorCode, errorMessage)
                        if (errorCode == 'auth/weak-password') {
                            res.redirect("/login?err=passwordRejected")
                        } if (errorCode == 'auth/email-already-in-use') {
                            res.redirect("/login?err=alreadyExists")
                        }if (errorCode == 'auth/invalid-email') {
                            res.redirect("/login?err=badEmail")
                        } else {
                            res.redirect("/login?err="+ _.escape(errorMessage))
                        }
                    });
            } else {
                //rejected
                res.redirect("/login?err=passwordRejected")
            }
        }
        

    })


app.use(function (req, res) {
    res.status(404)
    res.send(stringify(req))
})
module.exports = app;