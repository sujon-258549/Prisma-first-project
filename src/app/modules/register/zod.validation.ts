import { z } from "zod";

export const diplomaTeacherZodSchema = z.object({
    body: z.object({
        name: z.string().min(1),
        fatherName: z.string().min(1),
        motherName: z.string().min(1),
        gender: z.enum(["MALE", "FEMALE", "OTHER"]),
        dateOfBirth: z.coerce.date(), // "2001-10-10"
        bloodGroup: z.enum(["A_POS", "A_NEG", "B_POS", "B_NEG", "AB_POS", "AB_NEG", "O_POS", "O_NEG"]).optional(),

        phoneNumber: z.string().min(10),
        email: z.string().email(),
        password: z.string().min(6),
        emergencyContact: z.string().optional(),

        presentAddress: z.string(),
        permanentAddress: z.string(),

        teacherId: z.string(),
        role: z.enum(["ADMIN", "SUPPER_ADMIN", "FACULTY", "STUDENT"]),
        status: z.enum(["ACTIVE", "INACTIVE", "ON_LEAVE", "RETIRED", "RESIGNED"]),
        joiningDate: z.coerce.date(),
        designation: z.enum([
            "LECTURER",
            "INSTRUCTOR",
            "SENIOR_INSTRUCTOR",
            "HEAD_OF_DEPARTMENT",
            "VICE_PRINCIPAL",
            "PRINCIPAL"
        ]),
        department: z.string(),

        trainingCompleted: z.boolean(),
        teachingSubject: z.string().optional(),
        nidNumber: z.string().optional(),
        birthCertificateNo: z.string().optional(),
        nationality: z.string(),
        religion: z.string(),
        maritalStatus: z.enum(["MARRIED", "UNMARRIED", "DIVORCED", "WIDOWED"]),
        group: z.enum(["A_GROUP", "B_GROUP", "C_GROUP", "D_GROUP"]).optional(),

        photoUrl: z.string().url().optional(),
        signatureUrl: z.string().url().optional(),
    })
});



export const diplomaStudentZodSchema = z.object({
    body: z.object({
        name: z.string().min(1),
        fatherName: z.string().min(1),
        motherName: z.string().min(1),
        dateOfBirth: z.string(), // Date or ISO String
        gender: z.enum(["MALE", "FEMALE", "OTHER"]),
        bloodGroup: z.enum([
            "A_POS", "A_NEG",
            "B_POS", "B_NEG",
            "AB_POS", "AB_NEG",
            "O_POS", "O_NEG"
        ]),
        phoneNumber: z.string().min(11),
        email: z.string().email(),
        presentAddress: z.string().min(1),
        permanentAddress: z.string().min(1),
        department: z.string().min(1),
        semester: z.enum([
            "ONE",
            "TWO",
            "THREE",
            "FOUR",
            "FIVE",
            "SIX",
            "SEVEN",
            "EIGHT",
            "END"
        ])
        ,
        registrationNo: z.string().min(1),
        rollNo: z.string().min(1),
        gpa: z.number().min(0).max(4).optional(),
        passingYear: z.number().optional(),

        classTenSchoolName: z.string().min(1),
        classTenBoard: z.string().min(1),
        classTenGroup: z.string().min(1),
        classTenRollNo: z.string().min(1),
        classTenRegistrationNo: z.string().min(1),
        classTenGPA: z.string().min(0).max(5),
        classTenPassingYear: z.number().int()
    })
});

