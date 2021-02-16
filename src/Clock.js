import React, { useEffect, useState } from "react";
import Tooltip from './components/Tooltip';
import  "./App.css";

function Clock(props) {
  const { dayInfo } = props;
  const [startHour, setStartHour] = useState(0);
  const [endHour, setEndHour] = useState(0);
  const [workedTime, setWorkedTime] = useState(0);
  useEffect(() => {
    if (dayInfo) {
      const starting = new Date(dayInfo.start_time.slice(0, -2));
      setStartHour((starting.getMinutes() / 60 + starting.getHours()) / 12);
      const ending = new Date(dayInfo.end_time.slice(0, -2));
      setEndHour((ending.getMinutes() / 60 + ending.getHours()) / 12)
      dayInfo.start_time.indexOf("PM") !== -1 && starting.setHours(starting.getHours() + 12);
      dayInfo.end_time.indexOf("PM") !== -1 && ending.setHours(ending.getHours() + 12);
      const timeDifference = (ending.getTime()-starting.getTime())/1000;
      const timeCalculatin = timeDifference/(60*60);
      setWorkedTime(Number(timeCalculatin)<0?-(Number(timeCalculatin)):Number(timeCalculatin).toFixed(3));
    }
  }, [dayInfo]);
  return (
    <Tooltip content={`Worked: ${workedTime} hours`} direction={"up"}>
    <div className="clock">
      <div
        className="hand starthour"
        style={{ transform: `translate(-50%) rotate(${startHour * 360}deg)` }}
      ></div>
      <div
        className="hand endHour"
        style={{ transform: `translate(-50%) rotate(${endHour * 360}deg)` }}
      ></div>

      <div className="number number1">
        <div>1</div>
      </div>
      <div className="number number2">
        <div>2</div>
      </div>
      <div className="number number3">
        <div>3</div>
      </div>
      <div className="number number4">
        <div>4</div>
      </div>
      <div className="number number5">
        <div>5</div>
      </div>
      <div className="number number6">
        <div>6</div>
      </div>
      <div className="number number7">
        <div>7</div>
      </div>
      <div className="number number8">
        <div>8</div>
      </div>
      <div className="number number9">
        <div>9</div>
      </div>
      <div className="number number10">
        <div>10</div>
      </div>
      <div className="number number11">
        <div>11</div>
      </div>
      <div className="number number12">
        <div>12</div>
      </div>
    </div>
    </Tooltip>
  );
}

export default Clock;
