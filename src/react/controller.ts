import { Request, Response, } from "express";
import * as React from "react";
import { renderToString } from "react-dom/server";

import html from "./pages";
import Header from "./components/header/Header";
import MainContent from "./components/mainContent/Content";

export const index = (req: Request, res: Response) => {
  const header: string = renderToString(React.createElement(Header));
  const mainContent: string  = renderToString(React.createElement(MainContent));
  res.send(html({ header, mainContent }));
  return;
};
