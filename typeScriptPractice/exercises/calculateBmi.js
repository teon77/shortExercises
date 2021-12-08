"use strict";
exports.__esModule = true;
exports.calculateBmi = void 0;
var calculateBmi = function (height, weight) {
    var result = (weight / ((height / 100) * (height / 100)));
    switch (true) {
        case result <= 18.5:
            return "lightWeight";
        case result > 18.5 && result < 25:
            return "normaWeight";
        case result >= 25:
            return "overWeight";
        default:
            return "bad input";
    }
};
exports.calculateBmi = calculateBmi;
var a = Number(process.argv[2]);
var b = Number(process.argv[3]);
console.log((0, exports.calculateBmi)(a, b));
