import patientsData from "../../data/patientsdata";
import { v4 as uuidv4 } from 'uuid';
import { PatientEntry, PublicPatient, NewPatientEntry }from "../types";

const patients: Array<PatientEntry> = patientsData as Array<PatientEntry>; // unnecessary here

const getEntries = (): PatientEntry[] => {
    return patients;
}

const getNonSensitivePatientEntry = (): PublicPatient[] => {
    return patients.map((patient) => ({
        id: patient.id,
        name: patient.name,
        dateOfBirth: patient.dateOfBirth,
        gender: patient.gender,
        occupation: patient.occupation,
        entries: patient.entries
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
const findById = (id: string): PatientEntry | undefined => {
    return patients.find(p => p.id === id);
  };

export default {
    getEntries,
    addEntry,
    getNonSensitivePatientEntry,
    findById
}