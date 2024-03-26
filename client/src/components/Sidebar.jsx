import React from "react";

// React Icons
import { FiUsers } from "react-icons/fi";
import { PiAddressBook } from "react-icons/pi";
import { MdLogout } from "react-icons/md";

const Sidebar = ({ setPanel }) => {
  return (
    <aside className="sidebar w-[230px] lg:w-[250px] h-[100%] bg-white border-r-2 border-[#ddd] flex flex-col relative overflow-hidden">
      <header className="topLogo h-[9vh] px-3 bg-white flex items-center gap-2 shadow-[0_2px_10px_0px_rgba(10,10,10,0.1)]">
        <img
          src="/assets/SMIT-Logo.jpeg"
          alt="SMIT"
          className="w-[35px] h-[35px] rounded-full border-2 border-[#0873b9]"
        />
        <h1 className="text-[23px] text-[#444] text-center font-bold">Admin Portal</h1>
      </header>

      <section className="navigatePanel flex-1 py-1">
        <ul className="flex flex-col gap-1 px-[6px] py-2">
          <li
            className="flex items-center gap-2 px-2 py-[6px] hover:bg-zinc-200 hover:bg-opacity-80 transition-all cursor-pointer rounded-[4px]"
            onClick={() => setPanel("STUDENT")}
          >
            <span className="rounded-full p-1 bg-white border-2 border-[#8ac642] flex items-center justify-center">
              <FiUsers size={20} color="#666" />
            </span>
            <span className="text-[17px] text-[#555] font-bold">Students</span>
          </li>

          <li
            className="flex items-center gap-2 px-2 py-[6px] hover:bg-zinc-200 hover:bg-opacity-80 transition-all cursor-pointer rounded-[4px]"
            onClick={() => setPanel("ATTENDANCE")}
          >
            <span className="rounded-full p-1 bg-white border-2 border-[#8ac642] flex items-center justify-center">
              <PiAddressBook size={20} color="#666" />
            </span>
            <span className="text-[17px] text-[#555] font-bold">Attendance</span>
          </li>
        </ul>
      </section>

      <footer className="w-full p-2">
        <span className="flex items-center gap-2 w-full text-[19px] leading-5 font-bold py-[10px] px-4 text-[#444] cursor-pointer rounded-sm bg-zinc-200 hover:bg-[#8ac642] hover:text-[#fff] active:scale-[0.98] transition-all">
          <MdLogout size={23} /> Logout
        </span>
      </footer>
    </aside>
  );
};

export default Sidebar;
