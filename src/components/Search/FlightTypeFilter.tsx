"use client";
type classType = "economy" | "business" | "first";
type tripType = "roundtrip" | "one-way" | "multi-city";
import { useState } from "react";

export default function FlightTypeFilter() {
  const [tripType, setTripType] = useState<tripType>("one-way");
  const [classType, setClassType] = useState<classType>("economy");

  return (
    <div className="main-container mt-4 flex gap-6 items-center">
      <div className="flex items-center gap-3 text-sm">
        <div
          className={`flex items-center hover:text-teal-500 text-xs cursor-pointer ${
            tripType === "one-way" && "text-teal-500 "
          }`}
        >
          <input
            type="radio"
            id="one-way"
            name="trip_type"
            value="one-way"
            defaultChecked={tripType === "one-way"}
            onChange={(e) => setTripType(e.target.value as tripType)}
          />
           <label htmlFor="one-way">One-Way</label>
        </div>
        <div
          className={`flex items-center hover:text-teal-500 text-xs cursor-pointer ${
            tripType === "roundtrip" && "text-teal-500 "
          }`}
        >
          <input
            type="radio"
            id="round"
            name="trip_type"
            value="roundtrip"
            defaultChecked={tripType === "roundtrip"}
            onChange={(e) => setTripType(e.target.value as tripType)}
          />
           <label htmlFor="round">Round-Trip</label>
        </div>

        <div
          className={`flex items-center hover:text-teal-500 text-xs cursor-pointer ${
            tripType === "multi-city" && "text-teal-500 "
          }`}
        >
          <input
            type="radio"
            id="multi-city"
            name="trip_type"
            value="multi-city"
            defaultChecked={tripType === "multi-city"}
            onChange={(e) => setTripType(e.target.value as tripType)}
          />
            <label htmlFor="multi-city">Multi-City</label>
        </div>
      </div>
      <div className="flex items-center gap-3 text-xs">
        <div>
          <input
            type="radio"
            id="economy"
            name="class"
            value="economy"
            onChange={(e) => setClassType(e.target.value as classType)}
            className="hidden"
          />
           
          <label
            htmlFor="economy"
            className={`border border-slate-200 py-1 px-3 rounded-md hover:bg-teal-500 hover:text-white cursor-pointer ${
              classType === "economy" ? "bg-teal-500 text-white" : ""
            }`}
          >
            Economy
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="business"
            name="class"
            value="business"
            onChange={(e) => setClassType(e.target.value as classType)}
            className="hidden"
          />
           
          <label
            htmlFor="business"
            className={`border border-slate-200 py-1 px-3 rounded-md hover:bg-teal-500 hover:text-white cursor-pointer ${
              classType === "business" ? "bg-teal-500 text-white" : ""
            }`}
          >
            Business Class
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="first"
            name="class"
            value="first"
            onChange={(e) => setClassType(e.target.value as classType)}
            className="hidden"
          />
           
          <label
            htmlFor="first"
            className={`border border-slate-200 py-1 px-3 rounded-md hover:bg-teal-500 hover:text-white cursor-pointer ${
              classType === "first" ? "bg-teal-500 text-white" : ""
            }`}
          >
            First Class
          </label>
        </div>
      </div>
    </div>
  );
}
