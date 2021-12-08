"use strict";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
exports.__esModule = true;
var express_1 = require("express");
var calculateBmi_1 = require("./exercises/calculateBmi");
var exerciseCalculator_1 = require("./exercises/exerciseCalculator");
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.get('/ping', function (_req, res) {
    res.send('pong');
});
app.get('/hello', function (_req, res) {
    res.send('Hello Full Stack!');
});
app.get('/bmi', function (req, res) {
    if ('query' in req) {
        if ('weight' in req.query && 'height' in req.query) {
            res.status(200).send((0, calculateBmi_1.calculateBmi)(Number(req.query.height), Number(req.query.weight)));
        }
        else {
            res.status(403).send("bad input");
        }
    }
});
app.get('/calculateExercises', function (req, res) {
    if ("body" in req && "daily_exercises" in req.body && "target" in req.body) {
        var daily_exercises = req.body.daily_exercises;
        var target = req.body.target;
        var result = (0, exerciseCalculator_1.calculateExercises)(daily_exercises, target);
        res.send({
            result: result
        });
    }
});
var PORT = 3003;
app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
