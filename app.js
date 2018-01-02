var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.static('node_modules/bootstrap/dist'));

app.get('/hello', function (req, res) {
    res.send('hello .. !');
});

app.listen(3000, function () {
    console.log('Starting app');
});
