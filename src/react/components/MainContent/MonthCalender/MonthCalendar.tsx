import React, { FC } from "react";

import { Header } from "./Header";
import { WeekOfDays } from "./WeekOfDays"
import { Dates } from "./Dates";
import ProgramList from "./ProgramList"
import ProgramModal from "./ProgramModal";

const Body: FC = () => {
  return (
    <div className="mainContentBody">
      <table className="calendar">
        <WeekOfDays />
        <tbody>
          {Dates()}
        </tbody>
      </table>
    </div>
  );
};

const MonthCalendar: FC = () => {
  return (
    <div className="monthCalendar">
      <Header />
      <Body />
      <ProgramList />
      <ProgramModal />
    </div>
  );
};
export default MonthCalendar;
