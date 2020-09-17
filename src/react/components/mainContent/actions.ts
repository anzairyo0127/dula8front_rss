import * as I from "../interfaces";

export enum Actions {
  setNowDate,
  setStartDay,
  setSelectDate,
};

export const setNowDate = (state:I.CalendarState, payload:Date):I.CalendarState => {
  return {...state, nowDate: payload};
};

export const setSelectDate = (state:I.CalendarState, payload:number):I.CalendarState => {
  return {...state, selectDate: payload};
};
