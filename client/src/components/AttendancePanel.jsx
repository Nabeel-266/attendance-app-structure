import { useState } from "react";

// React Icons
import { PiAddressBook } from "react-icons/pi";
import { FaArrowLeftLong } from "react-icons/fa6";

const AttendancePanel = () => {
  const [attendanceTab, setAttendanceTab] = useState("STUDENT");

  return (
    <div className="attendancePanelCont h-[100%] flex flex-col gap-4 flex-grow bg-zinc-100 relative overflow-hidden">
      {/* Admin Panel Header */}
      <header className="panelHeader w-full h-[9vh] px-4 bg-white shadow-[0_2px_10px_0px_rgba(10,10,10,0.1)] flex items-center justify-between relative z-50">
        {/* Header Left */}
        <div className="headerLeft flex items-center gap-2">
          <span className="rounded-full p-1 bg-white border-2 border-[#8ac642] flex items-center justify-center">
            <PiAddressBook size={19} color="#8ac642" />
          </span>
          <h1 className="text-[22px] text-[#444] text-center font-bold">Attendance</h1>
        </div>

        {/* Header Right */}
        <div className="headerRight flex items-center gap-3">
          <span
            className={`text-[#fff] font-bold text-[16px] leading-4 ${
              attendanceTab === "STUDENT" ? "bg-[#0873b9]" : "bg-[#444]"
            } rounded-2xl py-2 px-3 cursor-pointer transition-all`}
            onClick={() => setAttendanceTab("STUDENT")}
          >
            Student
          </span>

          <span
            style={
              attendanceTab === "STUDENT" ? { rotate: "0deg" } : { rotate: "180deg" }
            }
          >
            <FaArrowLeftLong size={24} color="#8ac642" />
          </span>

          <span
            className={`text-[#fff] font-bold text-[16px] leading-4 ${
              attendanceTab === "CLASSES" ? "bg-[#0873b9]" : "bg-[#444]"
            } rounded-2xl py-2 px-3 cursor-pointer transition-all`}
            onClick={() => setAttendanceTab("CLASSES")}
          >
            Classes
          </span>
        </div>
      </header>
    </div>
  );
};

export default AttendancePanel;
