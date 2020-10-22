import * as React from "react";
import { Auth } from "aws-amplify";
import { AmplifySignOut } from '@aws-amplify/ui-react';
import MonthCalendar from "./MonthCalender/MonthCalendar";
import * as I from "../../../interfaces";
import { reducer } from "./reducer";

const modalData: I.Program = {
  id: 0,
  title: "init",
  content: "init",
  status: "init",
  startTime: "init",
  endTime: "init",
  createdDate: "init",
  updateDate: "init",
  userId: 0,
}

const mainContentInitState:I.CalendarState = {
  nowDate: new Date(),
  startDay: 0,
  selectDate: null,
  programList: [],
  isModalOpen: false,
  modalData,
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
  const getLocalStorageIdToken = async () => {
    const resp = await Auth.currentSession();
    /*
    const accessToken = resp.getAccessToken().getJwtToken();
    const refreshToken = resp.getRefreshToken().getToken();
    const idToken = resp.getIdToken().getJwtToken();
    console.log({accessToken, refreshToken, idToken}); 
     */
  }
  return (
    <MainContentProvider>
      <button onClick={getLocalStorageIdToken}>get</button>
      <AmplifySignOut buttonText="サインアウト"></AmplifySignOut>
      <div className="program-modal-window"></div>
      <MonthCalendar />
    </MainContentProvider>
  )  
};

export default MainContent;