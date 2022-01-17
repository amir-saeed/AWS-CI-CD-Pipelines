import express, { Application, Request, Response } from 'express';

const app: Application = express();

app.get("", (req: Request, res: Response) => {
    res.send({
        Id: 90,
        FirstName: "Prenex",
        LastName: "Info"
    });
});

app.listen(3700, () => {
    console.log('Server is running on port 3700');
})