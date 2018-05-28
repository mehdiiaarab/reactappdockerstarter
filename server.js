var express = require("express")
var path = require("path")

const PORT = 3000
const app = express()


//webpack
const webpack = require('webpack')
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("./webpack.config.js");
const compiler = webpack(config);


// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  watchOptions: {
    poll: true
  }
}));

app.use(webpackHotMiddleware(compiler))

// static assets
app.use(express.static(__dirname + "./public"))



// main route
app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./public/index.html"))
)

app.listen(PORT, () => console.log("App listening on port " + PORT))