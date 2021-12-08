"use strict";
exports.__esModule = true;
exports.calculateExercises = void 0;
var generateRating = function (average, target) {
    switch (true) {
        case average >= target:
            return { num: 3, description: "great job" };
        case average < target / 2:
            return { num: 1, description: "very bad job" };
        default:
            return { num: 2, description: "fine job but could do better" };
    }
};
var calculateExercises = function (arr, target) {
    var totalHoursAverage = (arr.reduce(function (a, b) { return a + b; }, 0)) / arr.length;
    var ratingObj = generateRating(totalHoursAverage, target);
    var result = {
        periodLength: arr.length,
        trainingDays: arr.filter(function (exerciseHours) { return exerciseHours > 0; }).length,
        success: (target > totalHoursAverage),
        rating: ratingObj.num,
        ratingDescription: ratingObj.description,
        target: target,
        average: totalHoursAverage
    };
    return result;
};
exports.calculateExercises = calculateExercises;
console.log((0, exports.calculateExercises)([2, 3, 4, 1, 0, 1, 5], 2));
var target = Number(process.argv[2]);
var arr = process.argv.splice(3).map(function (item) { return Number(item); });
console.log((0, exports.calculateExercises)(arr, target));
