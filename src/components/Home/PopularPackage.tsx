export default function PopularPackage() {
  return (
    <div className="main-container mt-48">
      <h1 className="text-4xl font-semibold text-center text-slate-700">
        Popular Package
      </h1>
      <p className="text-center text-slate-500 mt-4">
        The most popular tour package of the year
      </p>
      <div className="w-full grid grid-cols-4 gap-4 my-8">
        <PopularPackageCard />
        <PopularPackageCard />
        <PopularPackageCard />
        <PopularPackageCard />
      </div>
    </div>
  );
}

export const PopularPackageCard = () => {
  return (
    <div
      className={`bg-[url(${"https://static.vecteezy.com/system/resources/thumbnails/045/132/934/small_2x/a-beautiful-picture-of-the-eiffel-tower-in-paris-the-capital-of-france-with-a-wonderful-background-in-wonderful-natural-colors-photo.jpg"})] h-[400px] rounded-2xl relative  opacity-90`}
    >
      <div className="absolute bottom-0 p-4">
        <h1 className="text-2xl font-semibold  text-slate-200">
          The Eiffel Tower
        </h1>
        <p className=" text-slate-100 ">
          The most popular tour package of the year
        </p>
      </div>
    </div>
  );
};
