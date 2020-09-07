import * as React from "react";
import * as ReactDom from "react-dom";

import Header from "./header/Header";
import MonthCalendar from "./mainContent/MonthCalendar";

ReactDom.hydrate(<Header />, document.querySelector(".header"));
ReactDom.hydrate(<MonthCalendar />, document.querySelector(".mainContent"));
