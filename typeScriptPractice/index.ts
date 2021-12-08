/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import express from 'express';
import { calculateBmi } from "./exercises/calculateBmi";
import { calculateExercises } from "./exercises/exerciseCalculator";
import { exerciseResult } from "./exercises/exerciseCalculator";
const app = express();

app.use(express.json());
app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    if ('query' in req) {
        if ('weight' in req.query && 'height' in req.query) {
            res.status(200).send(calculateBmi(Number(req.query.height), Number(req.query.weight)));
        } else {
            res.status(403).send("bad input");
        } 
    }
});
  
app.get('/calculateExercises', (req, res) => {
    if ("body" in req && "daily_exercises" in req.body && "target" in req.body) {
        const daily_exercises: number[] = req.body.daily_exercises;
        const target: number = req.body.target;
        const result: exerciseResult = calculateExercises(daily_exercises, target);
        res.send({
            result
        });
    }
});
  
  
const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});