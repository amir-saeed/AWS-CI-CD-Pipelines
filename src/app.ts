import express, { Express, Request, Response } from 'express';
import config from 'config';
import connect from './utils/connect';
import routes from './routes';

const port = config.get<number>("port");
const app: Express = express();

app.listen(3700, async () => {
    console.log('Server is running on port 3700');
    await connect();

    routes(app);
})