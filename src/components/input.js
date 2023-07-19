import { useRef, useState } from "react";
import img from "./../images/icon-arrow.svg";
const Input = (props) => {
  const enteredDAY = useRef();
  const enteredMonth = useRef();
  const enteredYear = useRef();
  const [dError, setDError] = useState(false);
  const [mError, setMError] = useState(false);
  const [yError, setYError] = useState(false);
  let updateDate = new Date().getFullYear();
  const submitHandler = (e) => {
    e.preventDefault();
    const DayValue = enteredDAY.current.value;
    const monthValue = enteredMonth.current.value;
    const yearValue = enteredYear.current.value;

    if (DayValue.trim().length === 0 || DayValue >= 31) {
      setDError(true);
    } else if (monthValue.trim().length === 0 || monthValue >= 12) {
      setDError(false);
      setMError(true);
    } else if (yearValue.trim().length === 0 || yearValue >= updateDate) {
      setYError(true);
      setMError(false);
    } else {
      setDError(false);
      setMError(false);
      setYError(false);
      props.onAddAge(DayValue, monthValue, yearValue);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-row  gap-10 ml-16 mt-16 ">
        <div className=" flex flex-col">
          <label
            htmlFor="day"
            className={dError ? "text-red-500" : "text-gray-500"}
          >
            DAY
          </label>
          <input
            id="day"
            type="text"
            className={
              dError
                ? "p-3 w-28 rounded-md border border-red-400 outline-none"
                : "p-3 w-28 rounded-md border border-gray-400 outline-none"
            }
            ref={enteredDAY}
          />
          {dError && (
            <p className=" text-red-600 text-[10px] mt-2 font-mono">
              must be a valid day!
            </p>
          )}
        </div>
        <div className=" flex flex-col">
          <label
            htmlFor="month"
            className={mError ? "text-red-500" : "text-gray-500"}
          >
            MONTH
          </label>
          <input
            id="month"
            type="text"
            className={
              mError
                ? "p-3 w-28 rounded-md border border-red-400 outline-none"
                : "p-3 w-28 rounded-md border border-gray-400 outline-none"
            }
            ref={enteredMonth}
          />
          {mError && (
            <p className=" text-red-600 text-[10px] mt-2 font-mono">
              must be a valid month!
            </p>
          )}
        </div>
        <div className=" flex flex-col">
          <label
            htmlFor="year"
            className={yError ? "text-red-500" : "text-gray-500"}
          >
            YEAR
          </label>
          <input
            id="year"
            type="text"
            className={
              yError
                ? "p-3 w-28 rounded-md border border-red-400 outline-none"
                : "p-3 w-28 rounded-md border border-gray-400 outline-none"
            }
            ref={enteredYear}
          />
          {yError && (
            <p className=" text-red-600 text-[10px] mt-2 font-mono">
              must be a valid year!
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-row mt-12 max-w-[90%] ml-auto mr-auto ">
        <div className=" flex flex-row ml-6 mt-5 max-w-[90%]">
          <div className=" w-[440px] h-[2px] bg-gray-300 " />
          <button className="flex justify-center items-center bg-purple-700 w-20 h-20 rounded-full -mt-[38px] mr-[10px] ">
            <img src={img} alt="img" />
          </button>
        </div>
      </div>
    </form>
  );
};
export default Input;
