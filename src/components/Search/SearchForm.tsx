"use client";
type queryData = { [key: string]: string | string[] | undefined };

import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { GiAirplaneArrival, GiAirplaneDeparture } from "react-icons/gi";
import { IoCalendarSharp, IoPersonSharp, IoSearch } from "react-icons/io5";

export default function SearchForm({ queryData }: { queryData: queryData }) {
  const { origin, destination, departureDate, returnDate, guest } =
    queryData as queryData;
  return (
    <div className="main-container">
      <form
        action=""
        className="flex flex-col md:flex-row gap-2 pb-3 border-b border-slate-200/90"
      >
        <div className="flex flex-row items-center">
          <div className="flex justify-center items-center relative">
            <GiAirplaneDeparture size={13} className="absolute left-3" />
            <input
              type="text"
              name="origin"
              placeholder="From"
              defaultValue={origin}
              className="text-slate-700/40 text-sm w-full border border-slate-200  rounded-full py-1 pl-8 focus:outline-none"
            />
          </div>
          <span className="text-slate-100 bg-teal-500 p-1.5 rounded-full -ml-2 -mr-2 z-10">
            <FaArrowRightArrowLeft size={13} />
          </span>
          <div className="flex items-center relative">
            <GiAirplaneArrival size={13} className="absolute left-3" />
            <input
              type="text"
              name="destination"
              placeholder="to"
              defaultValue={destination}
              className="text-slate-700/40 text-sm w-full border border-slate-200  rounded-full py-1 pl-8 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex items-center relative">
          <IoCalendarSharp size={13} className="absolute left-3" />
          <input
            type="date"
            name="departureDate"
            placeholder="Departure Date"
            defaultValue={departureDate}
            className="text-slate-700/40 text-sm w-full border border-slate-200  rounded-full py-1 pl-8 focus:outline-none"
          />
        </div>
        <div className="flex items-center relative">
          <IoCalendarSharp size={13} className="absolute left-3" />
          <input
            type="date"
            name="returnDate"
            placeholder="Return Date"
            defaultValue={returnDate}
            className="text-slate-700/40 text-sm w-full border border-slate-200  rounded-full py-1 pl-8 focus:outline-none"
          />
          {/* <DatePicker
            name="selectDate"
            selected={selectDate}
            onChange={(date: Date | null) => setSelectDate(date)} //when day is clicked
          /> */}
        </div>
        <div className="flex items-center relative">
          <IoPersonSharp size={13} className="absolute left-3" />
          <input
            type="number"
            name="guest"
            placeholder="Travelers"
            defaultValue={guest}
            className="text-slate-700/40 text-sm w-full border border-slate-200  rounded-full py-1 pl-8 focus:outline-none"
          />
        </div>
        <button className="flex items-center gap-1 text-sm bg-teal-500 text-white py-1 px-4 rounded-full cursor-pointer hover:bg-teal-600">
          <IoSearch size={15} />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}
