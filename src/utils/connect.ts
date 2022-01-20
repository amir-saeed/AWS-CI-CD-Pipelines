import mongoose from 'mongoose';
import config from 'config';

async function connect() {
    const dbUrl = config.get<string>("dbUrl");
    try {
        await mongoose.connect(dbUrl);
        console.log('DB Connected');
    }
    catch (error) {
        console.log('Could not connect to db');
        process.exit(1);
    }
}

export default connect;
