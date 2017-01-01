// shell experiments
"use strict";

require('shelljs/global');

const express = require("express");
const bodyParser = require("body-parser");

let port = process.env.PORT || 6666;

let cmd = [
    `ls; `
  , `cd mystore;`
  , `ls;`
  , `pwd`
].join('');

exec(cmd, (code, stdout, stderr) => {
  if(code !== 0) {
    console.error(`😡 👎`);
    console.error(stderr)

  } else {
    console.info('😀 👍')
    console.info(stdout)
  }
});

let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.send({message:"💙", remark:"hello 🌍"});
})

app.get('/hi', (req, res) => {
  res.send({message:"🐼", remark:"hi 🌍"});
})

app.listen(port)
console.log(`🌍 Web Server is started - listening on ${port}`)
