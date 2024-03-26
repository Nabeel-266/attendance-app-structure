import React from "react";

const StudentInfoRow = () => {
  return (
    <ul className="titleBar w-full grid grid-cols-7 gap-1 place-items-center list-none py-2 text-center bg-[#fff] rounded-[4px] font-semibold text-[#444] text-[16.2px] shadow-[0_0px_10px_0px_rgba(10,10,10,0.1)] cursor-pointer hover:bg-slate-200 transition-all">
      <li className="text-[#0873b9] font-bold">91756</li>
      <li>
        <img
          src="/assets/person/person7.jpg"
          alt="student"
          className="w-[30px] h-[30px] object-cover rounded-full"
        />
      </li>
      <li className="col-span-2">Muhammad Nabeel</li>
      <li>Graphic Designing</li>
      <li>01</li>
      <li>Sir Sufiyan</li>
    </ul>
  );
};

export default StudentInfoRow;
