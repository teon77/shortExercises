import patientsData from "../../data/patients.json";
import { v4 as uuidv4 } from 'uuid';
import { PatientEntry, NonSensitivePatientEntry, NewPatientEntry }from "../types";

const patients: Array<PatientEntry> = patientsData as Array<PatientEntry>; // unnecessary here

const getEntries = (): PatientEntry[] => {
    return patients;
}

const getNonSensitivePatientEntry = (): NonSensitivePatientEntry[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
      }));
}
const addEntry = (entry: NewPatientEntry): PatientEntry => {
    const newPatientEntry = {
        id: uuidv4(),
        ...entry
    };
    patients.push(newPatientEntry);
    return newPatientEntry;
}

export default {
    getEntries,
    addEntry,
    getNonSensitivePatientEntry
}