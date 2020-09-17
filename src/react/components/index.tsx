import * as React from "react";
import * as ReactDom from "react-dom";

import Header from "./header/Header";
import MainContent  from "./mainContent/Content";

ReactDom.hydrate(<Header />, document.querySelector(".header"));
ReactDom.hydrate(<MainContent />, document.querySelector(".mainContent"));
