import * as I from "../../../interfaces";
import * as A from "./actions";

export const reducer = (state:I.CalendarState, action:I.Action) => {
  console.log({action});
  switch (action.type) {
    case A.Actions.setNowDate:
      return A.setNowDate(state, action.payload);
    case A.Actions.setSelectDate:
      return A.setSelectDate(state, action.payload);  
    case A.Actions.closeModal:
      return A.closeModal(state);
    case A.Actions.setModalData:
      return A.setModalData(state, action.payload);
    default:
      return state;
  }
};