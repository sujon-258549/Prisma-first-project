
import prisma from "../../utility/prismaClient"
import { paginationAndSort } from "../utils/paginationAndSort";
import { search } from "../utils/search";



const studentIntoDB = async (query: any, options: any) => {

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
    const { limit, page, sortBy, sortOrder } = options

  
    const pagination = paginationAndSort(page, limit, sortBy, sortOrder);
    const result = await prisma.diplomaStudent.findMany({
        where: whereCondition || {},
        skip: pagination.skip,

        orderBy: {
            [pagination.sortBy]: pagination.sortOrder
        }

    })

    return result
}



export const studentServices = { studentIntoDB }
