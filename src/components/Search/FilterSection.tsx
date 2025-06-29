import { flightData } from "./h";

export default async function FilterSection() {
  const data = await flightData();
  console.log(data);

  const allAirlinesName = await data?.data.reduce((result, item): any => {
    const { flight_data } = item?.itin_details[0];
    const { airline_name } = flight_data[0];
    if (!result.includes(airline_name)) {
      result.push(airline_name);
    }
    return result;
  }, []);
  const allBaggages = await data?.data.reduce((result, item): any => {
    const { flight_data } = item?.itin_details[0];
    const {
      pax_baggage: { adult },
    } = flight_data[0];
    if (!result.includes(adult)) {
      result.push(adult);
    }
    return result;
  }, []);

  return (
    <div className="w-[180px]">
      <h1 className=" font-semibold">Filter By</h1>
      {/* <div className="mt-3">
        <div>
            <span>Stop</span>
            <span>Reset</span>
        </div>
        <div>
            {data?.data.map((item) => (
                <div>
                    <span>{item.name}</span>
                    <span>{item.count}</span>
                </div>
            ))}
        </div>
      </div> */}
      {/* Airlines */}
      <div className="mt-3 shadow p-3 rounded-md">
        <div className="flex justify-between text-sm">
          <span>Airlines</span>
          <span>^</span>
        </div>
        <div className="mt-2">
          {allAirlinesName.map((item: string, index: number) => (
            <div key={index} className="flex items-center gap-2 text-xs">
              <input type="checkbox" value={item} name="airlines" id={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      </div>
      {/* Price */}
      <div className="mt-3 shadow p-3 rounded-md">
        <div className="flex justify-between text-sm">
          <span>Price</span>
          <span>^</span>
        </div>
        <div className="mt-2">
          {allAirlinesName.map((item: string, index: number) => (
            <div key={index} className="flex items-center gap-2 text-xs">
              <input type="checkbox" value={item} name="airlines" id={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      </div>
      {/* Duration */}
      <div className="mt-3 shadow p-3 rounded-md">
        <div className="flex justify-between text-sm">
          <span>Duration</span>
          <span>^</span>
        </div>
        <div className="mt-2">
          {allAirlinesName.map((item: string, index: number) => (
            <div key={index} className="flex items-center gap-2 text-xs">
              <input type="checkbox" value={item} name="airlines" id={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      </div>
      {/* Baggage Allowance */}
      <div className="mt-3 shadow p-3 rounded-md">
        <div className="flex justify-between text-sm">
          <span>Baggage Allowance</span>
          <span>^</span>
        </div>
        <div className="mt-2">
          {allBaggages.map((item: string, index: number) => (
            <div key={index} className="flex items-center gap-2 text-xs">
              <input type="checkbox" value={item} name="airlines" id={item} />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
