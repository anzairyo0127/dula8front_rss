import * as React from "react";
import * as ReactDom from "react-dom";

import Header from "./Header";

ReactDom.hydrate(<Header />, document.getElementById("header"));
