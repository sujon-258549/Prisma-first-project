import prisma from "../../utility/prismaClient"


const studentIntoDB = async()=>{
    const result = await prisma.diplomaStudent.findMany()
    return result
}


export const studentServices = {studentIntoDB}