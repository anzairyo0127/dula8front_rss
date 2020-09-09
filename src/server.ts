import { Express } from "express";
import dotenv from "dotenv";

import { createApp } from "./factory";

dotenv.config();

const port: string = <string>process.env.PORT;
const host: string = <string>process.env.HOST;

const app: Express = createApp("dev");

app.listen(port, () => {
  console.log(`Listen port ${host}:${port}`);
});
