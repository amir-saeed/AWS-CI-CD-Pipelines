import { Request, Response } from "express";
import { UserDocument, UserInput } from '../interfaces/userInput.interface';
import UserModel from '../models/user.model';
import schema from '../schema/user.schema';
import { omit } from 'lodash';
import { FilterQuery } from "mongoose";

export async function createUser(req: Request, res: Response) {
    try {
        const error: any = await schema.validate(req);
        if (error) return res.status(400).json(error);

        const found: any = await findUser({ email: req.body.email });
        if (found) {
            return res.status(400).send('User already registered')
        }

        // const user = await UserModel.create(req.body); // Security flaw

        const user = await UserModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        res.send(omit(user.toJSON(), "password"));
    }
    catch (error: any) {
        return res.status(409).send(error.message);
    }
}

export async function findUser(query: FilterQuery<UserDocument>) {
    return await UserModel.findOne(query).lean();
}

export async function login(params: any) {

}
