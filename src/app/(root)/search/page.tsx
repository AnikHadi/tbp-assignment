import FilterSection from "@/components/Search/FilterSection";
import FlightTypeFilter from "@/components/Search/FlightTypeFilter";
import ResultSection from "@/components/Search/ResultSection";
import SearchForm from "@/components/Search/SearchForm";
import Navbar from "@/components/share/Navbar";

type SearchParams = { [key: string]: string | string[] | undefined };
export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const queryData = await searchParams;

  // const origin = searchParams?.origin;
  // const destination = searchParams?.destination;
  // const departureDate = searchParams?.departureDate;
  // const returnDate = searchParams?.returnDate;
  // const guest = searchParams?.guest;

  // console.log(origin, destination, departureDate, returnDate, guest);
  return (
    <div className="">
      <Navbar />
      <SearchForm queryData={queryData} />
      <FlightTypeFilter />
      <div className="main-container flex mt-6 gap-6">
        {/* Filter Section */}
        <FilterSection />
        {/* Result Show Section */}
        <ResultSection />
      </div>
    </div>
  );
}
