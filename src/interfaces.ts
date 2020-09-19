export interface CalendarState {
  nowDate: Date,
  startDay: number,
  selectDate: number | null,
  programList: Program[],
  isModalOpen: boolean,
  modalData: Program | null,
};

import { Actions } from "./react/components/MainContent/actions";
export interface Action {
  type: Actions,
  payload: any,
};

export interface Program {
  id: number,
  title: string,
  content: string,
  status: string,
  startTime: string,
  endTime: string,
  createdDate: string,
  updateDate: string,
  userId: number,
}