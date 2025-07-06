export interface TDiplomaStudent {
    name: string;
    fatherName: string;
    motherName: string;
    dateOfBirth: string | Date; // Accepts both
    gender: "MALE" | "FEMALE" | "OTHER";
    bloodGroup:
      | "A_POS" | "A_NEG"
      | "B_POS" | "B_NEG"
      | "AB_POS" | "AB_NEG"
      | "O_POS" | "O_NEG";
    phoneNumber: string;
    email: string;
    presentAddress: string;
    permanentAddress: string;
    department: string;
    semester: number;
    registrationNo: string;
    rollNo: string;
    gpa?: number;
    passingYear?: number;
  
    classTenSchoolName: string;
    classTenBoard: string;
    classTenGroup: string;
    classTenRollNo: string;
    classTenRegistrationNo: string;
    classTenGPA: number;
    classTenExamYear: number;
  }
  
  export interface TDiplomaTeacher {
    name: string;
    fatherName: string;
    motherName: string;
    gender: "MALE" | "FEMALE" | "OTHER";
    dateOfBirth: Date;
    bloodGroup?: "A_POS" | "A_NEG" | "B_POS" | "B_NEG" | "AB_POS" | "AB_NEG" | "O_POS" | "O_NEG";
  
    phoneNumber: string;
    email: string;
    password: string;
    emergencyContact?: string;
  
    presentAddress: string;
    permanentAddress: string;
  
    teacherId: string;
    role: "ADMIN" | "SUPPER_ADMIN" | "FACULTY" | "STUDENT";
    status: "ACTIVE" | "INACTIVE" | "ON_LEAVE" | "RETIRED" | "RESIGNED";
    joiningDate: Date;
    designation:
      | "LECTURER"
      | "INSTRUCTOR"
      | "SENIOR_INSTRUCTOR"
      | "HEAD_OF_DEPARTMENT"
      | "VICE_PRINCIPAL"
      | "PRINCIPAL";
    department: string;
  
    trainingCompleted: boolean;
    teachingSubject?: string;
    nidNumber?: string;
    birthCertificateNo?: string;
    nationality: string;
    religion: string;
    maritalStatus: "MARRIED" | "UNMARRIED" | "DIVORCED" | "WIDOWED";
    group?: "A_GROUP" | "B_GROUP" | "C_GROUP" | "D_GROUP";
  
    photoUrl?: string;
    signatureUrl?: string;
  }
  