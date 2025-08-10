import prisma from "../../utility/prismaClient"

const attendanceServicesIntoDB = async (payload: any) => {
    console.log(payload)
    const result = await prisma.attendanceData.create({
        data: {
            group: payload.group,
            semester: payload.semester,
            shiftName: payload.shift,
            departmentName: payload.departmentName,
            subject: payload.subject,
            teacher: {
                connect: { id: payload.teacherId }  // Connect existing teacher by ID
            },
            students: {
                create: payload.students.map((s: { studentId: any; isAttended: any; }) => ({
                    student: { connect: { id: s.studentId } }, // Connect existing student by ID
                    isAttended: s.isAttended
                }))
            }
        }
    });

    return result
}


export const attendancesServices = { attendanceServicesIntoDB }