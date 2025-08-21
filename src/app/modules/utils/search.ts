export const search = (query: { searchTerm: any }, searchableFields: string[]) => {
    const andCondition: any[] = [];

    if (query?.searchTerm) {
        andCondition.push({
            OR: searchableFields.map((field: string) => ({
                [field]: {
                    contains: query?.searchTerm,
                    mode: "insensitive",
                },
            })),
        });
    }
    const whereCondition = { AND: andCondition }
    return whereCondition;
}
