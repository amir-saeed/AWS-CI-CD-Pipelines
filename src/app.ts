import express, { Express } from 'express';
import config from 'config';
import connect from './utils/connect';
import routes from './routes';

const port = config.get<number>("port");
const app: Express = express();
app.use(express.json());

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await connect();

    routes(app);
})