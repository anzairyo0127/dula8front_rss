import React, { FC, useContext } from "react";
import classNames from "classnames";

import * as utils from "../../../../utils";
import * as I from "../../../../interfaces";
import * as A from "../actions";
import { MainContentContext } from "../Content";

const Date: FC<{ date: Date }> = ({ date }) => {
  const { state, dispatch } = useContext(MainContentContext);
  const dayOfWeek: number = date.getDay();
  const isHoliday = [0, 6].includes(dayOfWeek);
  const unixTime = date.getTime();
  const isClicked = state.selectDate === unixTime;
  const classes = classNames({ holidayColor: isHoliday }, { selected: isClicked });

  const onClickHandler = async (e: React.MouseEvent): Promise<void> => {
    if (unixTime === state.selectDate) {
      const payload = {
        selectDate: null,
        programList: await utils.fetchProgramList(null)
      }
      dispatch({ type: A.Actions.setSelectDate, payload });
    } else {
      const payload = {
        selectDate: unixTime,
        programList: await utils.fetchProgramList(unixTime)
      }
      dispatch({ type: A.Actions.setSelectDate, payload });
    }
  };

  const displayDate = () => {
    const month = date.getMonth();
    const d = date.getDate();
    if (state.nowDate.getMonth() === month) {
      return d;
    } else {
      return `${date.getMonth() + 1}/${d}`
    };
  };

  return (<td key={unixTime} className={classes} onClick={onClickHandler}>{displayDate()}</td>)
};

export const Dates = (): JSX.Element[] => {
  const { state, dispatch } = useContext(MainContentContext);

  const date = state.nowDate;
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDateOfMonth = utils.getFirstDate(year, month);
  const lastDateOfMonth = utils.getLastDate(year, month);
  const firstDateOfWeek = utils.getFirstDateOfWeek(firstDateOfMonth);
  const lastDateOfWeek = utils.getLastDateOfWeek(lastDateOfMonth);

  const termDay = (lastDateOfWeek.getTime() - firstDateOfWeek.getTime()) / 86400000

  const dates: JSX.Element[] = (() => {
    const l = [];
    let temp = [];
    let count = 1;
    for (let i = 0; i <= termDay; i++) {
      const date = utils.addDate(firstDateOfWeek, i);
      const el = <Date key={date.toISOString()} date={date} />
      temp.push(el);
      if (date.getDay() === 6) {
        l.push(<tr key={count}>{temp}</tr>)
        count++;
        temp = [];
      };
    };
    return l;
  })();

  return dates;
};
