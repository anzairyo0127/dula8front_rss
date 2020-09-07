import { Express } from "express";

import { createApp } from "./factory";

const port: number = 9000;
const app: Express = createApp("dev");

app.listen(port, () => {
  console.log(`Listen port ${port}`);
});
