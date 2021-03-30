const express = require('express');
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app
    .set('view engine', 'html')
    .use(express.static(__dirname + "/public"))
    //.use("/api/", require("./api"))
    .use("/", require("./routes"))
    

app.listen(port, function () {
    console.log("Listening on http://localhost:" + port);
})