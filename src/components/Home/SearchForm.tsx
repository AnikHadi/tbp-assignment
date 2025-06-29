import { redirect } from "next/navigation";

export default function SearchForm() {
  const searchData = async (formData: FormData) => {
    "use server";

    const origin = formData.get("origin");
    const destination = formData.get("destination");
    const departureDate = formData.get("departureDate");
    const returnDate = formData.get("returnDate");
    const guest = formData.get("guest");

    const searchParams = new URLSearchParams();
    searchParams.set("origin", origin as string);
    searchParams.set("destination", destination as string);
    searchParams.set("departureDate", departureDate as string);
    searchParams.set("returnDate", returnDate as string);
    searchParams.set("guest", guest as string);

    const url = `/search?${searchParams.toString()}`;
    redirect(url);
  };

  return (
    <form className="" action={searchData}>
      <div className="flex flex-col gap-2 pb-3 border-b border-slate-200/90">
        <label htmlFor="origin" className="text-slate-700/40">
          Your Location
        </label>
        <input
          type="text"
          name="origin"
          id="origin"
          required
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
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-slate-700 absolute left-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <input
              type="text"
              name="destination"
              id="destination"
              required
              placeholder="Enter Destination"
              className="w-full border border-slate-200 rounded-full text-slate-700 py-1.5 pl-10"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 ">
          <label htmlFor="departureDate" className="text-slate-700/40 ml-4">
            Check-in
          </label>
          <div className="flex items-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-slate-700 absolute left-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>

            <input
              type="date"
              name="departureDate"
              id="departureDate"
              required
              placeholder="mm/dd/yyyy"
              className="w-full border border-slate-200 rounded-full text-slate-700 py-1.5 pl-10"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 ">
          <label htmlFor="returnDate" className="text-slate-700/40 ml-4">
            Check-Out
          </label>
          <div className="flex items-center relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-slate-700 absolute left-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>

            <input
              type="date"
              name="returnDate"
              id="returnDate"
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
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 text-slate-700 absolute left-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <input
              type="number"
              name="guest"
              id="guest"
              required
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
  );
}
