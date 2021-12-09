import express from 'express';
import toNewPatientEntry from '../utils';
const router = express.Router();
import patientsService from "../services/patientsService";

router.get('/', (_req, res) => {
  res.send(patientsService.getNonSensitivePatientEntry());
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);
    const addedEntry = patientsService.addEntry(newPatientEntry);
    res.json(addedEntry);
  } catch (err) {
    res.status(400).send({ error: err.message})
  }
});

export default router;