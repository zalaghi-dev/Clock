import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NumZero } from "./utils/NumZero";
import { weekDay } from "./utils/weekDay";
import { monthName } from './utils/monthName';
function App() {
  const [Clock, setClock] = useState({ h: "00", m: "00", s: "00" });
  const [appDate, setDate] = useState({ d: "10", m: "Febuary", y: "0000" });
  const [week, setWeek] = useState("Sunday");
  useEffect(() => {
    setInterval(() => {
      let time = new Date();

      setClock({
        h: NumZero(time.getHours()),
        m: NumZero(time.getMinutes()),
        s: NumZero(time.getSeconds()),
      });
      setWeek(weekDay(time.getDay()));
      setDate({
        d: NumZero(time.getDate()),
        m: monthName(time.getMonth()),
        y: time.getFullYear(),
      });
    }, 1000);
  }, []);
  return (
    <div className="position-fixed w-100 h-100 d-flex justify-content-center align-items-center bg-black">
      <div className="text-center">
        <div className="display-1 text-white fw-bolder ">
          {`${Clock.h}:${Clock.m} `}
          <span className="text-danger fw-light">{Clock.s}</span>
        </div>
        <div className="text-white">
          <span> {week},</span>
          <span className="text-danger">{`${appDate.d} ${appDate.m}`} </span>
          <span>{appDate.y}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
