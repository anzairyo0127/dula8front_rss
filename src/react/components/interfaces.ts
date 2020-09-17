export interface CalendarState {
  nowDate: Date,
  startDay: number,
  selectDate: number,
};

import { Actions } from "./mainContent/actions";
export interface Action {
  type: Actions,
  payload: any,
};