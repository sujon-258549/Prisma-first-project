
import prisma from "../../utility/prismaClient"
import { search } from "../utils/search";



const studentIntoDB = async (query: any) => {
   
    const searchableFields = ["name",
        "fatherName",
        "motherName",
        "email",
        "phoneNumber",
        "presentAddress",
        "permanentAddress",
        "emergencyContact",
        "registrationNo",
        "rollNo",
        "nationality",
        "religion",
        "classTenSchoolName",
        "classTenBoard",
        "classTenGroup",
        "classTenRollNo",
        "classTenRegistrationNo",
        "photoUrl"
    ];
    const whereCondition = search(query, searchableFields) // search work


    const result = await prisma.diplomaStudent.findMany({
        where: whereCondition
    })
    return result
}



export const studentServices = { studentIntoDB }
