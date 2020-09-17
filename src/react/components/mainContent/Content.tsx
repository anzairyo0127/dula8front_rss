import * as React from "react";

import MonthCalendar from "./MonthCalendar";
import * as I from "../interfaces";
import { reducer } from "./reducer";

const mainContentInitState:I.CalendarState = {
  nowDate: new Date(),
  startDay: 0,
  selectDate: 0,
};

export const MainContentContext = React.createContext<I.CalendarState | any>(mainContentInitState);

const MainContentProvider = ({children}:{children:any}) => {
  const [state, dispatch] = React.useReducer(reducer, mainContentInitState);
  return (
    <MainContentContext.Provider value={{state, dispatch}}>
      {children}
    </MainContentContext.Provider>
  )
};

const MainContent = () => {
  return (
    <MainContentProvider>
      <MonthCalendar />
    </MainContentProvider>
  )  
};

export default MainContent;