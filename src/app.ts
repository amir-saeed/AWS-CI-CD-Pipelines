import express from 'express';
import config from 'config';
import helmet from 'helmet';

import connect from './utils/connect';
import routes from './routes';

const port = config.get<number>("port");
const app = express();

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await connect();

    routes(app);
})