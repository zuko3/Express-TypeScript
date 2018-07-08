"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* For Setting the request, response, Router type */
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.status(200).json({
        message: "Hello World"
    });
});
router.get('/:name', function (req, res) {
    var name = req.params.name;
    res.status(200).json({
        message: "welcome " + name
    });
});
exports.HomeController = router;
