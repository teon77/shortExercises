export interface exerciseResult {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}
interface rating{
    num: number
    description:string
}

const generateRating = (average: number, target: number): rating=>{
    switch (true) {
        case average >= target:
            return { num: 3, description: "great job" };
        case average < target/2:
            return { num: 1, description: "very bad job" };
        default:
            return { num: 2, description: "fine job but could do better" };
    }
};

export const calculateExercises = (arr: number[], target: number): exerciseResult => {
    const totalHoursAverage: number = (arr.reduce((a, b) => a + b, 0)) / arr.length;
    const ratingObj: rating = generateRating(totalHoursAverage, target);
    const result: exerciseResult = {
        periodLength: arr.length,
        trainingDays: arr.filter(exerciseHours => exerciseHours > 0).length,
        success: (target> totalHoursAverage),
        rating: ratingObj.num,
        ratingDescription: ratingObj.description,
        target: target,
        average: totalHoursAverage
    };
    return result;
};

console.log(calculateExercises([2,3,4,1,0,1,5], 2));


const target = Number(process.argv[2]);
const arr: number[] = process.argv.splice(3).map((item) => Number(item));
console.log(calculateExercises(arr, target));




