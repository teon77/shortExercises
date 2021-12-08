import diagnosesData from "../../data/diagnoses.json";

import DiagnoseEntry from "../types";

const diagnoses: Array<DiagnoseEntry> = diagnosesData as Array<DiagnoseEntry>;

const getEntries = (): Pick<DiagnoseEntry, "code" | "name" | "latin">[] => {
    return diagnoses;
}

const addEntry = () => {
    return null;
}

export default {
    getEntries,
    addEntry
}