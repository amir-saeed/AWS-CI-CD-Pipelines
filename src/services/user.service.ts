import UserModel, { UserInput } from './../models/user.model';

const createUser = async (input: UserInput) => {
    try {
        // console.log('JASDJFAJSFJ', input);
        const user = await UserModel.create(input);
        return user;
    }
    catch (error: any) {
        throw new Error(error);
    }
}

export default createUser;
