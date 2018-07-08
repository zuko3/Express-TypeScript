"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* Server Ts file */
var express_1 = __importDefault(require("express"));
var controllers_1 = require("./controllers");
var app = express_1.default();
var port = 3000;
app.get("/", function (req, res) {
    return res.status(200).json({
        message: "Try These Url",
        url_one: 'http://localhost:3000/home',
        url_two: 'http://localhost:3000/home/zuko3'
    });
});
app.use('/home', controllers_1.HomeController);
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
