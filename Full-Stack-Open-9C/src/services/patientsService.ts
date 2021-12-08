import patientsData from "../../data/patients.json";

import { PatientEntry, NonSensitivePatientEntry }from "../types";

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
const addEntry = () => {
    return null;
}

export default {
    getEntries,
    addEntry,
    getNonSensitivePatientEntry
}