export interface DiagnoseEntry {
    code: string;
    name: string;
    latin?: string;
}
  
export interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: 'male' | 'female' | 'other';
  occupation: string;
}

export type NonSensitivePatientEntry = Omit<PatientEntry, "ssn">;

