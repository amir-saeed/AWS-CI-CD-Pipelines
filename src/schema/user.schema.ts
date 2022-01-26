import { Request, Response, NextFunction } from 'express';
import zod, { object, string, AnyZodObject } from 'zod';

const createUserSchema = object({
    body: object({
        name: string({
            required_error: "Name is required"
        }).min(5).max(50),

        email: string({
            required_error: "Email required"
        }).min(5).max(255).email("Not a valid email"),

        password: string({
            required_error: "Password required"
        }).min(5).max(255)
    })
});

const validate = async (req: Request) => {
    try {
        const sss = await createUserSchema.parseAsync({
            body: req.body,
            query: req.body,
            params: req.params
        })
        return null;
    }
    catch (error) {
        console.log('Error occured:ddd', error);
        return error;
    }
}

export default { createUserSchema, validate };

