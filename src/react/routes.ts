import { Router } from "express";
import * as controller from "./controller";

export const viewRoutes = Router();

viewRoutes.get("/", controller.index);
