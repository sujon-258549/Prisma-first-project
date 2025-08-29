// Search function

export const search = (
    query: { searchTerm: any } & { [key: string]: any },
    searchableFields: string[],
) => {
    const { searchTerm, ...filterData } = query
    const andCondition: any[] = [];
  
    if (searchTerm) {
        andCondition.push({
            OR: searchableFields.map((field: string) => ({
                [field]: {
                    contains: searchTerm,
                    mode: "insensitive",
                },
            })),
        });
    }
    if (Object.keys(filterData).length > 0) {
        andCondition.push({
            AND: Object.keys(filterData).map(kye => ({
                [kye]: {
                    equals: filterData[kye]
                }
            }))
        })

    }

    const whereCondition = { AND: andCondition }
    return whereCondition;
}
