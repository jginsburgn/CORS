const PORT = 30002;
const BIND_IP = "0.0.0.0";

var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.raw({type:"*/*"}));

function getLine() {
    var retVal = "";
    for (var i = 0; i < process.stdout.columns; i++) {
        retVal += "-";
    }
    return retVal;
}

function logResponse(req, res, next) {
    console.log(getLine());
    console.log(req.method, req.path, req.protocol.toUpperCase()+ "/" + req.httpVersion);
    for (var i = 0; i < req.rawHeaders.length/2; i++) {
        console.log(req.rawHeaders[i * 2] + ":" + req.rawHeaders[i * 2 + 1]);
    }
    if (Buffer.isBuffer(req.body)) {
        console.log();
        console.log(req.body.toString());
    }
    console.log(getLine());
    next();
}

app.use(logResponse);
app.use(express.static(path.join(__dirname, "bstatic")));

app.listen(
    PORT,
    BIND_IP,
    function() {
        console.log("Server A now bound to " + BIND_IP + ":" + PORT);
    }
);
