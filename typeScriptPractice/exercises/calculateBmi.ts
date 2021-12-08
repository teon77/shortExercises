export const calculateBmi = (height: number, weight: number): string => {
    const result: number = (weight / ((height/100) * (height/100)));
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
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
console.log(calculateBmi(a, b));

