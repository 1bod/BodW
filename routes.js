const express = require('express');
const app = express();
const fs = require('fs')


app.set('view engine', 'html');

app.get("/", (req, res) => {
    console.log(res.statusCode)
    res.sendFile(__dirname + '/public/')
  })
  .get("/surveys/", (req, res) => {
    console.log(res.statusCode)
    res.sendFile(__dirname + '/public/surveys')
  })
  .get(/\/surveys\/.+/, (req, res) => {
    console.log(req.url)
    try {
      let path = __dirname + '/public' + req.url + '/index.html'
      if (fs.existsSync(path)) {
        console.log(res.statusCode)
        res.sendFile(path)
      } else {
        render404(req, res)
      }
    } catch (error) {
      console.error(error)
      render404(req, res)
    }
  })
  .get("/playground/", (req, res) => {
    console.log(res.statusCode)
    res.sendFile(__dirname + '/public/playground')
  })
app.get("/login/", (req, res) => {
    console.log(res.statusCode)
    res.sendFile(__dirname + '/public/auth/login.html')
  })
  .get("/cat/", (req, res) => {
    res.send("<script>window.location='https://www.twitch.tv/imcatjam';</script>")
  })
  .get("/discord/", (req, res) => {
    res.send("<script>window.location='https://discord.gg/6SS95tb7v4';</script>")
  })
// I stole this
function render404(req, res) {
  res.status(404)
  // respond with html page
  if (req.accepts('html')) {
    res.sendFile('public/404/index.html', {
      url: req.url,
      root: __dirname
    })
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.json({
      error: 'Not found'
    })
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found')
}
app.use(function (req, res) {
  render404(req, res)
})
module.exports = app;