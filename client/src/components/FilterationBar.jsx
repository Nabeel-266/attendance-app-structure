import React from "react";

// React Icons
import { HiMiniXMark } from "react-icons/hi2";

const FilterationBar = ({ isShowFilterBar, setIsShowFilterBar }) => {
  return (
    <aside
      style={
        isShowFilterBar
          ? { transform: "translateX(0%)" }
          : { transform: "translateX(110%)" }
      }
      className="filterBar w-[280px] h-[91%] px-3 bg-white absolute right-0 top-[9vh] z-20 border-l-2 border-[#ddd] transition-all shadow-[-10px_0px_10px_0px_rgba(10,10,10,0.1)]"
    >
      {/* Filteration Header */}
      <header className="filterBarHdr pt-4 pb-[7px] px-[2px] flex items-center justify-between border-b-2 border-[#ddd]">
        <h2 className="text-[18.5px] leading-5 text-[#8ac642] font-bold">
          Student's Filteration
        </h2>
        <span className="cursor-pointer" onClick={() => setIsShowFilterBar(false)}>
          <HiMiniXMark size={22} color="#444" />
        </span>
      </header>

      {/* Filter By Student Name */}
      <section className="nameFilteration mt-5 flex flex-col gap-2">
        <label
          htmlFor="filterByName"
          className="text-[16px] leading-4 font-semibold text-[#444] px-1"
        >
          Filter By Student's Name
        </label>
        <input
          type="text"
          name="FilterByName"
          id="filterByName"
          placeholder="Student's Name"
          className="w-full text-[15px] font-medium text-[#444] px-1 pb-[2px] pt-1 outline-none rounded-[3px] border-2 border-[#ddd] focus:border-2 focus:border-[#0873b9] transition-all placeholder:text-[#666]"
        />
      </section>

      {/* Filter By Course Name */}
      <section className="courseFilteration mt-5 flex flex-col gap-2">
        <label
          htmlFor="filterByCourse"
          className="text-[16px] leading-4 font-semibold text-[#444] px-1"
        >
          Filter By Course Name
        </label>
        <select
          name="FilterByCourse"
          id="filterByCourse"
          className="w-full text-[15px] font-medium text-[#444] p-1 outline-none rounded-[3px] border-2 border-[#ddd] focus:border-2 focus:border-[#0873b9] transition-all"
        >
          <option value="">Course Name</option>
          <option value="Web & Mobile" className="font-semibold">
            Web & Mobile
          </option>
          <option value="Graphic Designing" className="font-semibold">
            Graphic Designing
          </option>
          <option value="Flutter" className="font-semibold">
            Flutter
          </option>
          <option value="Python" className="font-semibold">
            Python
          </option>
          <option value="CCNA" className="font-semibold">
            CCNA
          </option>
          <option value="CCO" className="font-semibold">
            CCO
          </option>
          <option value="CCA" className="font-semibold">
            CCA
          </option>
        </select>
      </section>

      {/* Filter By Batch Number */}
      <section className="batchFilteration mt-5 flex flex-col gap-2">
        <label
          htmlFor="filterByBatchNo"
          className="text-[16px] leading-4 font-semibold text-[#444] px-1"
        >
          Filter By Batch Number
        </label>
        <select
          name="FilterByBatchNo"
          id="filterByBatchNo"
          className="w-full text-[15px] font-medium text-[#444] p-1 outline-none rounded-[3px] border-2 border-[#ddd] focus:border-2 focus:border-[#0873b9] transition-all"
        >
          <option value="">Batch Number</option>
          <option value="Batch-01" className="font-semibold">
            Batch-01
          </option>
          <option value="Batch-02" className="font-semibold">
            Batch-02
          </option>
          <option value="Batch-03" className="font-semibold">
            Batch-03
          </option>
          <option value="Batch-04" className="font-semibold">
            Batch-04
          </option>
          <option value="Batch-05" className="font-semibold">
            Batch-05
          </option>
        </select>
      </section>

      {/* Filter By Trainer */}
      <section className="trainerFilteration mt-5 flex flex-col gap-2">
        <label
          htmlFor="filterByTrainer"
          className="text-[16px] leading-4 font-semibold text-[#444] px-1"
        >
          Filter By Trainer Name
        </label>
        <select
          name="FilterByTrainer"
          id="filterByTrainer"
          className="w-full text-[15px] font-medium text-[#444] p-1 outline-none rounded-[3px] border-2 border-[#ddd] focus:border-2 focus:border-[#0873b9] transition-all"
        >
          <option value="">Trainer Name</option>
          <option value="Sir Sufiyan" className="font-semibold">
            Sir Sufiyan
          </option>
          <option value="Sir Ghous" className="font-semibold">
            Sir Ghous
          </option>
          <option value="Sir Inzamam" className="font-semibold">
            Sir Inzamam
          </option>
          <option value="Sir Jaffer" className="font-semibold">
            Sir Jaffer
          </option>
          <option value="Sir Farukh" className="font-semibold">
            Sir Farukh
          </option>
        </select>
      </section>

      {/* Filter Button */}
      <div className="filterButtonArea w-full mt-5 py-2">
        <button className="w-full tracking-wide p-2 text-[#fff] text-lg leading-5 font-bold bg-[#8ac642] rounded-[3px] active:scale-[0.98] transition-all">
          Filter
        </button>
      </div>
    </aside>
  );
};

export default FilterationBar;
