import { Request, Response, } from "express";
import * as React from "react";
import { renderToString } from "react-dom/server";

import { html } from "./pages";
import Top from "./components/Top";

export const index = (req: Request, res: Response) => {
  const top: string = renderToString(React.createElement(Top));
  res.send(html({ top }));
  return;
};
