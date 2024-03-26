import { useState } from "react";

// Components
import FilterationBar from "./FilterationBar";
import StudentInfoRow from "./StudentInfoRow";
import AddStudentModal from "./AddStudentModal";

// React Icons
import { FiUsers } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";

const StudentPanel = () => {
  const [isShowFilterBar, setIsShowFilterBar] = useState(false);
  const [isOpenStudentModal, setIsOpenStudentModal] = useState(false);

  return (
    <div className="studentPanelCont h-[100%] flex flex-col gap-4 flex-grow bg-zinc-100 relative overflow-hidden">
      {/* Admin Panel Header */}
      <header className="panelHeader w-full h-[9vh] px-4 bg-white shadow-[0_2px_10px_0px_rgba(10,10,10,0.1)] flex items-center justify-between relative z-50">
        {/* Header Left */}
        <div className="headerLeft flex items-center gap-2">
          <span className="rounded-full p-1 bg-white border-2 border-[#8ac642] flex items-center justify-center">
            <FiUsers size={19} color="#8ac642" />
          </span>
          <h1 className="text-[22px] text-[#444] text-center font-bold">Students</h1>
        </div>

        {/* Header Right */}
        <div className="headerRight flex items-center gap-3">
          {/* Search */}
          <div className="searchBar relative w-[230px] flex items-center justify-center gap-2 bg-zinc-100 rounded-[3px]">
            <input
              type="number"
              name="SearchStudent"
              id="searchingInput"
              placeholder="Search Student by ID's ..."
              className="w-full peer/input outline-none pl-7 pr-1 py-[4px] text-[15px] font-medium text-[#444] bg-transparent rounded-[3px] border-2 border-[#bbb] focus:border-2 focus:border-[#0873b9] focus:shadow-[0_0px_5px_0px_rgba(0,0,0,0.2)] transition-all placeholder:text-[#888]"
            />

            <label
              htmlFor="searchingInput"
              className="absolute left-2 pointer-events-none text-[#888] peer-focus/input:text-[#0873b9]  transition-all"
            >
              <FiSearch size={17} />
            </label>
          </div>

          {/* Add Student Button */}
          <button className="flex items-center gap-1 px-3 py-2 bg-[#0873b9] active:bg-[#8ac642] rounded-[3px] transition-all">
            <FaCirclePlus size={15} color="#fff" />
            <span
              className="text-white font-semibold text-sm leading-4"
              onClick={() => setIsOpenStudentModal(true)}
            >
              Add Student
            </span>
          </button>

          {/* Filter Student Button */}
          <button
            className="flex items-center gap-1 px-3 py-2 bg-[#0873b9] active:bg-[#8ac642] rounded-[3px] transition-all"
            onClick={() => setIsShowFilterBar(!isShowFilterBar)}
          >
            <HiMiniAdjustmentsHorizontal size={15} color="#fff" />
            <span className="text-white font-semibold text-sm leading-4">
              Filter Students
            </span>
          </button>
        </div>
      </header>

      {/* Admin Panel Body */}
      <div className="panelBody w-full flex flex-col gap-4 px-3">
        {/* Title Bar */}
        <div className="bodyTitlesBar w-full pr-2">
          <ul className="titleBar w-full grid grid-cols-7 gap-1 list-none py-2 text-center bg-[#666] rounded-[4px] font-bold text-[#fff] text-[17px]">
            <li>ID</li>
            <li>Picture</li>
            <li className="col-span-2">Student Name</li>
            <li>Course</li>
            <li>Batch no</li>
            <li>Trainer</li>
          </ul>
        </div>

        {/* Student Info Area */}
        <section className="studentInfoArea w-full h-[76vh] flex flex-col gap-3 overflow-auto">
          <StudentInfoRow />
          <StudentInfoRow />
          <StudentInfoRow />
          <StudentInfoRow />
          <StudentInfoRow />
          <StudentInfoRow />
          <StudentInfoRow />
          <StudentInfoRow />
          <StudentInfoRow />
          <StudentInfoRow />
          <StudentInfoRow />
        </section>
      </div>

      <FilterationBar
        isShowFilterBar={isShowFilterBar}
        setIsShowFilterBar={setIsShowFilterBar}
      />

      {isOpenStudentModal && (
        <AddStudentModal setIsOpenStudentModal={setIsOpenStudentModal} />
      )}
    </div>
  );
};

export default StudentPanel;
