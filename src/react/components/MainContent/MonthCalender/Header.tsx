import React, { FC, useContext } from "react";
import classNames from "classnames";

import * as utils from "../../../../utils";
import * as I from "../../../../interfaces";
import * as A from "../actions";
import { MainContentContext } from "../Content";

export const Header: FC = () => {
  const { state, dispatch } = useContext(MainContentContext);

  const date = state.nowDate;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const prefMonth = (e: any) => {
    dispatch({ type: A.Actions.setNowDate, payload: utils.addMonth(date, -1) });
  };

  const nextMonth = (e: any) => {
    dispatch({ type: A.Actions.setNowDate, payload: utils.addMonth(date, 1) });
  };

  return (
    <div className="monthCalendarHeader">
      <h3>{year}年 {month}月</h3>
      <button className="arrowButton" onClick={prefMonth}>{"<<"}</button>
      <button className="arrowButton" onClick={nextMonth}>{">>"}</button>
    </div>
  );
};