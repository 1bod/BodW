const express = require('express');
const app = express();
require("dotenv").config();

const port = process.env.PORT;


app
    .set('view engine', 'html')
    .set('etag', false)
    .use(express.static(__dirname + "/public",{maxage: 0}))
    .use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})
    .use("/api/", require("./api"))
    .use("/", require("./routes"))

app.listen(port, function () {
    console.log("Listening on http://localhost:" + port);
})