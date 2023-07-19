const Age = (props) => {
  const { day , month , year} = props
  return (
    <div className=" flex flex-col text-[70px] ml-20 ">
      <div className=" flex flex-row gap-2">
      <p className=" text-purple-600">{year}</p>
        <p>YEARS</p>
      </div>
      <div className=" flex flex-row gap-2">
        <p className=" text-purple-600">{month}</p>
        <p>MONTH</p>
      </div>
      <div className=" flex flex-row gap-2">
       
        <p className=" text-purple-600">{day !=="- -" ? Math.abs(day) :'- -'}</p>
        <p>DAYS</p>
      </div>
    </div>
  );
};
export default Age;
