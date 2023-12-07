import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config({path:`.env.${process.env.NODE_ENV}`});
import "./db.config"
const app: Express = express();
const port = process.env.PORT;
app.get('/', (_: Request, res: Response) => {
  res.send('Express + TypeScript Server' );
});
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});