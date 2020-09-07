import { Router } from "express";
import * as React from "react";
import { renderToString } from "react-dom/server";

import html from "./pages";
import Header from "./components/header/Header";
import MonthCalendar from "./components/mainContent/MonthCalendar";

export const viewRoutes = Router();

viewRoutes.get("/", (req, res) => {
  const header: string = renderToString(React.createElement(Header));
  const mainContent: string = renderToString(React.createElement(MonthCalendar));
  res.send(html({ header, mainContent }));
});
