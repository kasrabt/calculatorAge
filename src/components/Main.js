import { useState } from "react";
import Age from "./age";
import Input from "./input";

const Main = () => {
  const [myDay, setDay] = useState("- -");
  const [myMonth, setMonth] = useState("- -");
  const [myYear, setYear] = useState("- -");
  const myAge = (day, month, year) => {
    const yearDate = new Date().getFullYear();
    const monthDate = new Date().getMonth();
    const dayDate = new Date().getDay();
    setDay(dayDate - day);
    setMonth(monthDate - month);
    setYear(yearDate - year);
  };
  return (
    <div className="  flex-col max-w-[90%] mr-auto ml-auto bg-white w-[800px] h-[600px] flex  mt-32 rounded-lg rounded-br-[200px] ">
      <Input onAddAge={myAge} />
      <Age day={myDay} month={myMonth} year={myYear} />
    </div>
  );
};
export default Main;
