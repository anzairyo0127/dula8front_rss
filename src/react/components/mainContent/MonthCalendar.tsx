import React, { FC, useState, useContext } from "react";
import classNames from "classnames";

import * as utils from "../../../utils";
import * as I from "../interfaces";
import * as A from "./actions";
import {MainContentContext} from "./Content";

const Header:FC = () => {
  const {state, dispatch } = useContext(MainContentContext);

  const date = state.nowDate;
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const prefMonth = (e:any) => {
    dispatch({type: A.Actions.setNowDate, payload: utils.addMonth(date, -1)});
  };

  const nextMonth = (e:any) => {
    dispatch({type: A.Actions.setNowDate, payload: utils.addMonth(date, 1)});
  };

  return (
    <div className="monthCalendarHeader">
      <h1>{ year }年 { month }月</h1>
      <button className="arrowButton" onClick={prefMonth}>{ "<<" }</button>
      <button className="arrowButton" onClick={nextMonth}>{ ">>" }</button>
    </div>
  );
};

const Date:FC<{date:Date}> = ({date}) => {
  const {state, dispatch} = useContext(MainContentContext);
  const dayOfWeek: number = date.getDay();
  const isHoliday = [0, 6].includes(dayOfWeek);
  const isoString = date.toISOString();
  const isClicked = state.selectDate === isoString;
  const classes = classNames({holidayColor:isHoliday},{selected:isClicked});
  const onClickHandler = (e:React.MouseEvent): void => {
    dispatch({type: A.Actions.setSelectDate, payload: isoString});
    console.log(state.selectDate)
  };
  return (<td key={isoString} className={classes} onClick={onClickHandler}>{date.getDate()}</td>)
};

const Dates = (state:I.CalendarState):JSX.Element[] => {
  const date = state.nowDate;
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDateOfMonth = utils.getFirstDate(year, month);
  const lastDateOfMonth = utils.getLastDate(year, month);
  const firstDateOfWeek = utils.getFirstDateOfWeek(firstDateOfMonth);
  const lastDateOfWeek = utils.getLastDateOfWeek(lastDateOfMonth);

  const termDay = (lastDateOfWeek.getTime() - firstDateOfWeek.getTime()) / 86400000

  const dates:JSX.Element[] = (() => {
    const l = [];
    let temp = [];
    let count = 1;
    for (let i = 0; i <= termDay; i++ ) {
      const date = utils.addDate(firstDateOfWeek, i);
      const el = <Date key={date.toISOString()} date={date} />
      temp.push(el);
      if (date.getDay() === 6) {
        l.push(<tr key={count}>{ temp }</tr>)
        count++;
        temp = [];
      };
    };
    return l;
  })();

  return dates;
};

const WeekOfDays = () => {
  const days = [
    "SUN",
    "MON",
    "TUS",
    "WED",
    "THU",
    "FRI",
    "SAT",
  ];
  
  const weeks = Object.entries(days).map(([i, day]) => {
    if (([0,6]).includes(Number(i))) {
      return <th key={i} className="holidayColor">{ day }</th>              
    } else {
      return <th key={i}>{ day }</th>
    }
  });
  
  return (
    <thead>
      <tr id="week">
        { weeks }
      </tr>
    </thead>
  );
};

const Body:FC = () => {
  const { state, _ } = useContext(MainContentContext);

  return (
    <div className="mainContentBody">
      <table className="calendar">
        <WeekOfDays />
        <tbody>
          { Dates(state) }
        </tbody>
      </table>
    </div>
  );
};

const MonthCalendar:FC = () => {
  return (
    <div className="monthCalendar">
      <Header />
      <Body />
    </div>
  );
};

export default MonthCalendar;
