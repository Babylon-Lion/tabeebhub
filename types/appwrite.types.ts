import { Models } from "node-appwrite";

export interface Patient extends Models.Document {
  userid: string;
  name: string;
  email: string;
  phone: string;
  DateOfBirth: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  healthCenterName: string;
  healthNumber: string;
  NationalIdNumber: string;
  allergies: string | undefined;
  chronicDiseases: string | undefined;
  currentMedications: string | undefined;
  FamilyMedicalHistory: string | undefined;
  pastMedicalHistory: string | undefined;
  providedIdentificationCopy: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}