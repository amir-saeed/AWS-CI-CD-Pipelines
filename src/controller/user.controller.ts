import { Request, Response } from "express";
import createUser from '../services/user.service';

const createUserHandler = async (
    req: Request,
    res: Response,
    next: any
) => {
    try {
        console.log('JASDJFAJSFfffffffJ',  req.body);
        const user = await createUser(req.body);
        return res.send(user);
    }
    catch (error: any) {
        console.log('Error occured:', error);
        return
    }
}

export default createUserHandler;
