import "../../../scss/style.scss";

import * as React from "react";
import * as ReactDom from "react-dom";
import Modal from 'react-modal';

import Header from "./Header/Header";
import MainContent  from "./MainContent/Content";

Modal.setAppElement(".mainContent");
ReactDom.hydrate(<Header />, document.querySelector(".header"));
ReactDom.hydrate(<MainContent />, document.querySelector(".mainContent"));
