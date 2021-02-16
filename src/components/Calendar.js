import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Clock from "../Clock";
import '../App.css';

export default function MyCalendar(props) {
  const { workingInfo } = props;
  const [startDate, setStartDate] = useState("");
  const [validDates, setValidDates] = useState([]);
  useEffect(() => {
    if (workingInfo) {
      const starting = new Date(workingInfo[0].start_time.slice(0, -2));
      workingInfo.forEach((date) => {
        setValidDates((validDates) => [
          ...validDates,
          new Date(date.start_time.slice(0, -2)),
        ]);
      });
      setStartDate(starting);
    }
  }, [workingInfo]);
  if (startDate) {
    let validDay = 0;
    validDates.forEach((day, index) => {
      if (
        day.getDay() === startDate.getDay() &&
        day.getMonth() === startDate.getMonth()
      ) {
        validDay = index;
      }
    });
    return (
      <div className="my-calendar">
        <div className="calendaritem">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            includeDates={validDates}
          />
        </div>
        <div className="clockitem">
          <Clock dayInfo={workingInfo[validDay]} />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
