import "../../../scss/style.scss";

import * as React from "react";
import * as ReactDom from "react-dom";
import Modal from 'react-modal';

import Top from "./Top";

import Amplify from 'aws-amplify';
import config from "../../aws-exports";

Amplify.configure(config)

Modal.setAppElement(".app");
ReactDom.hydrate(<Top />, document.querySelector(".app"));
