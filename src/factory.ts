import e, { Express, json, urlencoded } from "express";

import { viewRoutes } from "./react/routes";

export const createApp = (config: string): e.Express => {
  const app: Express = e();
  // Setup WebApi
  app.use(json());
  app.use(urlencoded({ extended: true }));
  // Setup Views
  app.use("/", viewRoutes);
  app.use(e.static("./dist/public"));
  return app;
};
