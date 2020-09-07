import { Router } from "express";
import * as React from "react";
import { renderToString } from "react-dom/server";

import html from "./pages";
import Header from "./components/header/Header";

export const viewRoutes = Router();

viewRoutes.get("/", (req, res) => {
  const header: string = renderToString(React.createElement(Header));
  res.send(html({ header: header }));
});
