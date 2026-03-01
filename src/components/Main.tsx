import { useContext, useState } from "react";
import CountrySearchFilter from "./CountrySearchFilter";
import CountryCard from "./CountryCard";
import { AppContext } from "../App";

const Main = () => {

  const [searchCountry, setSearchCountry] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("");

  const { countriesData } = useContext(AppContext);

  return (
    <main className="w-full max-w-400 min-[2240px]:max-w-500 px-4 md:px-6 flex flex-col gap-12 pb-10 md:pb-20">
        <CountrySearchFilter setSearchCountry={setSearchCountry} setFilterByRegion={setFilterByRegion} />

        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-rows-none gap-15 px-2 md:px-0">
          {countriesData.filter(country => country.name.toLowerCase().startsWith(searchCountry.toLowerCase()) && country.region.includes(filterByRegion)).map((country, _) => (
            <CountryCard
              key={country.alpha3Code}
              alpha3Code={country.alpha3Code}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flags={country.flags}
            />
          ))}
        </div>
    </main>
  )
}

export default Main