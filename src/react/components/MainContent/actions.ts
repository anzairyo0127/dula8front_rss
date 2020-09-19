import * as I from "../../../interfaces";
import * as utils from "../../../utils";

export enum Actions {
  setNowDate,
  setStartDay,
  setSelectDate,
  closeModal,
  setModalData,
};

export const setNowDate = (state: I.CalendarState, payload: Date): I.CalendarState => {
  return { ...state, nowDate: payload };
};

interface SelectDatePayload {
  selectDate: number,
  programList: I.Program[]
}

export const setSelectDate = (state: I.CalendarState, payload: SelectDatePayload): I.CalendarState => {
  return { ...state, selectDate: payload.selectDate, programList: payload.programList };
};

export const setModalData = (state: I.CalendarState, payload: I.Program): I.CalendarState => {
  return { ...state, isModalOpen: true, modalData: payload };
};

export const closeModal = (state: I.CalendarState): I.CalendarState => {
  return { ...state, isModalOpen: false };
};
