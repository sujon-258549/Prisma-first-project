import { catchAsync } from "./catchAsync"
import { AnyZodObject } from 'zod';
import { NextFunction, Request, Response } from 'express';
 const validation = (schema: AnyZodObject) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        await schema.parseAsync({
            body: req.body,
            cookies: req.cookies,
        });
        next()
    })
}

export default validation