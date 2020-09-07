import e, { Express, json, urlencoded } from "express";

import { viewRoutes } from "./views/routes";
import { apiRoutes } from "./api/controllers";

export const createApp: (config: string) => e.Express = config => {
  const app: Express = e();
  // Setup Views
  app.use("/", viewRoutes);

  // Setup WebApi
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use("/api/v1", apiRoutes);
  return app;
};
