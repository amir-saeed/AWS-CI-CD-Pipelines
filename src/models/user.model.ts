// import mongoos from 'mongoose';

import * as mongoose from 'mongoose';
import { UserInput, UserDocument } from '../interfaces/userInput.interface';
import bcrypt from 'bcrypt';
import config from 'config';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255

    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
},
    {
        timestamps: true
    })

userSchema.pre("save",
    async function (next) {
        let user = this as UserDocument;
        if (!user.isModified("password")) {
            return next();
        }
        // generate salt
        const salt = await bcrypt.genSalt(config.get<number>("saltLength"));
        if (user && user.password) {
            const hash = await bcrypt.hashSync(user.password, salt);
            user.password = hash;
        }
        return next();
    });

const UserModel = mongoose.model<UserDocument>("users", userSchema);

export default UserModel;
