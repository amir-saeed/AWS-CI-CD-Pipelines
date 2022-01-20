import mongoos from 'mongoose';

const { Schema } = mongoos;

export interface UserInput {
    email: string,
    name: string,
    password: string
}

export interface UserDocument extends UserInput, mongoos.Document {
    createdAt: Date,
    updatedAt: Date
}

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true }
},
    {
        timestamps: true
    })

const UserModel = mongoos.model<UserDocument>("User", userSchema);

export default UserModel;
