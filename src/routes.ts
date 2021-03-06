import { Express, Request, Response } from 'express';
import createUserHandler from './controller/user.controller';

function routes(app: Express) {

    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
    // Route level route
    app.get("", (req: Request, res: Response) => {
        res.send({
            Id: 90,
            FirstName: "Prenex",
            LastName: "Info"
        });
    })

    app.post("/api/users", createUserHandler);
}
export default routes;