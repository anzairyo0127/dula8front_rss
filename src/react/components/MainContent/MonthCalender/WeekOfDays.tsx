import React, { FC, useContext } from "react";

export const WeekOfDays = () => {
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
    if (([0, 6]).includes(Number(i))) {
      return <th key={i} className="holidayColor">{day}</th>
    } else {
      return <th key={i}>{day}</th>
    }
  });

  return (
    <thead>
      <tr id="week">
        {weeks}
      </tr>
    </thead>
  );
};