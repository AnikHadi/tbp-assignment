import Link from "next/link";
import Navbar from "../share/Navbar";
import SearchForm from "./SearchForm";

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
                <Link
                  href="/discover"
                  className="button inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-400 hover:bg-teal-500"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  main-container lg:-mt-2 md:mt-6  ">
        <div className="w-full h-full p-4 bg-white shadow  rounded-2xl pb-8">
          <SearchForm />
        </div>
      </div>
    </div>
  );
}
