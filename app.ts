import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || '3000';

app.use('/', (req: Request, res: Response) => {
    res.send('Hello world!')
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});