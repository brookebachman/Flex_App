import React, { useState } from "react";
import RCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <RCalendar onChange={onChange} value={date} className="react-calendar" />
    </div>
  );
};

export default Calendar;
