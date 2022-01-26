import mongoos from 'mongoose';

export interface UserInput {
    name?: string,
    email?: string,
    password?: string
}

export interface UserDocument extends UserInput, mongoos.Document {
    createdAt: Date,
    updatedAt: Date
}