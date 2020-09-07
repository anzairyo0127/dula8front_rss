import e, { Express, json, urlencoded } from "express";

import { viewRoutes } from "./views/routes";

export const createApp = (config: string): e.Express => {
  const app: Express = e();

  app.use("/static", e.static(__dirname + "../dist/public"))

  // Setup WebApi
  app.use(json());
  app.use(urlencoded({ extended: true }));
  // Setup Views
  app.use("/", viewRoutes);
  return app;
};
