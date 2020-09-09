import React from "react";

const Header = () => {
  return (
    <div className="monthCalendarHeader">
      <h1>2020 9月</h1>
    </div>
  );
};

const Body = () => {
  return (
    <div className="mainContentBody">
      <table className="calendar">
        <tr>
          <th className="holidayColor">SUN</th>
          <th>MON</th>
          <th>TUS</th>
          <th>WED</th>
          <th>THU</th>
          <th>FRI</th>
          <th className="holidayColor">SAT</th>
        </tr>
        <tr>
          <td className="holidayColor"> </td>
          <td> </td>
          <td className="haveProgram">1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td className="holidayColor">5</td>
        </tr>
        <tr>
          <td className="haveProgram holidayColor selected">6</td>
          <td>7</td>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td className="holidayColor">12</td>
        </tr>
        <tr>
          <td className="holidayColor haveProgram">13</td>
          <td>14</td>
          <td>15</td>
          <td>16</td>
          <td>17</td>
          <td>18</td>
          <td className="holidayColor">19</td>
        </tr>
        <tr>
          <td className="holidayColor">20</td>
          <td>21</td>
          <td>22</td>
          <td>23</td>
          <td>24</td>
          <td>25</td>
          <td className="holidayColor">26</td>
        </tr>
        <tr>
          <td className="holidayColor">27</td>
          <td>28</td>
          <td>29</td>
          <td>30</td>
          <td> </td>
          <td> </td>
          <td className="holidayColor"> </td>
        </tr>
      </table>
    </div>
  );
};

const MonthCalendar = () => {
  return (
    <div className="monthCalendar">
      <Header />
      <Body />
    </div>
  );
};

export default MonthCalendar;
