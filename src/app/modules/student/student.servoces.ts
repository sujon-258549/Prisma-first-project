import prisma from "../../utility/prismaClient"


const studentIntoDB = async (query: any) => {
    console.log(query)
    const result = await prisma.diplomaStudent.findMany({
        where: {
            name: {
                contains: query.searchTerm
            }
        }
    })
    return result
}


export const studentServices = { studentIntoDB }