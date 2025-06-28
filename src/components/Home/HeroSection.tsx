import Navbar from "../share/Navbar";

export default function HeroSection() {
  return (
    <div className="lg:h-[600px] md:h-[600px] sm:h-[700px] h-[700px] w-full bg-[url(/HeroBanner.webp)]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-20 sm:py-24 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
              Plan your perfect trip
            </h1>
            <p className="mt-4 text-lg leading-6 text-gray-100">
              Find your perfect trip, designed by insiders who know and love
              their cities.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/discover"
                  className="button inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-400 hover:bg-teal-500"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  main-container lg:-mt-2 md:mt-6  ">
        <div className="w-full h-full p-4 bg-white shadow  rounded-2xl pb-8">
          <form action="" className="">
            <div className="flex flex-col gap-2 pb-3 border-b border-slate-200/90">
              <label htmlFor="my_location" className="text-slate-700/40">
                Your Location
              </label>
              <input
                type="text"
                name="my_location"
                id="my_location"
                placeholder="Enter your location"
                className=" focus:outline-none text-2xl font-semibold text-slate-600"
              />
            </div>
            {/* Down Section */}
            <div className="flex flex-col md:flex-row justify-between w-full mt-4  gap-3">
              <div className="flex w-full flex-col gap-2 ">
                <label htmlFor="destination" className="text-slate-700/40 ml-4">
                  Location
                </label>
                <div className="flex items-center relative w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeLinecap="square"
                    stroke="currentColor"
                    className="size-5 text-slate-700 absolute left-4"
                  >
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>

                  <input
                    type="text"
                    name="destination"
                    id="destination"
                    placeholder="Enter Destination"
                    className="w-full border border-slate-200 rounded-full text-slate-700 py-1.5 pl-10"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col gap-2 ">
                <label htmlFor="check_in" className="text-slate-700/40 ml-4">
                  Check-in
                </label>
                <div className="flex items-center relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeLinecap="square"
                    stroke="currentColor"
                    className="size-5 text-slate-700 absolute left-4"
                  >
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                    />
                  </svg>

                  <input
                    type="date"
                    name="check_in"
                    id="check_in"
                    placeholder="mm/dd/yyyy"
                    className="w-full border border-slate-200 rounded-full text-slate-700 py-1.5 pl-10"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col gap-2 ">
                <label htmlFor="check_out" className="text-slate-700/40 ml-4">
                  Check-Out
                </label>
                <div className="flex items-center relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeLinecap="square"
                    stroke="currentColor"
                    className="size-5 text-slate-700 absolute left-4"
                  >
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                    />
                  </svg>

                  <input
                    type="date"
                    name="check_out"
                    id="check_out"
                    placeholder="mm/dd/yyyy"
                    className="w-full border border-slate-200 rounded-full text-slate-700 py-1.5 pl-10"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col gap-2 ">
                <label htmlFor="guest" className="text-slate-700/40 ml-4">
                  Guest
                </label>
                <div className="flex items-center relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeLinecap="square"
                    stroke="currentColor"
                    className="size-5 text-slate-700 absolute left-4"
                  >
                    <path
                      stroke-linecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <input
                    type="number"
                    name="guest"
                    id="guest"
                    placeholder="Guest"
                    className="w-full border border-slate-200 rounded-full text-slate-700 py-1.5 pl-10"
                  />
                </div>
              </div>

              <button className="mt-auto px-7 py-1.5 rounded-full bg-teal-400 text-gray-50">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
