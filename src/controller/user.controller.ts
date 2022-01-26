import { Request, Response } from "express";
import { createUser } from '../services/user.service';

const createUserHandler = async (
    req: Request,
    res: Response,
    next: any
) => {
    await createUser(req, res);
}

export default createUserHandler;
