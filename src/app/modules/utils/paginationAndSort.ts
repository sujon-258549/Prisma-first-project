  export const paginationAndSort = (
        page: string,
        limit: string,
        sortBy: string,
        sortOrder: string
    ) => {
        const pageNumber: number = Number(page) || 1;
        const limitNumber: number = Number(limit) || 10;
        const skip: number = (pageNumber - 1) * limitNumber;

        const sortByField = sortBy || "createdAt";
        const sortOrderValue = sortOrder || "desc"; // সাধারণত asc/desc হয়, "createdAt" না

        return {
            page: pageNumber,
            limit: limitNumber,
            skip,
            sortBy: sortByField,
            sortOrder: sortOrderValue,
        };
    };