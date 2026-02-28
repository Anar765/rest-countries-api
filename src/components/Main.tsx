import { useContext, useState } from "react";
import CountrySearchFilter from "./CountrySearchFilter";
import CountryCard from "./CountryCard";
import { AppContext } from "../App";

const Main = () => {

  const [searchCountry, setSearchCountry] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("");

  const { countriesData } = useContext(AppContext);

  return (
    <main className="w-full max-w-400 flex flex-col gap-12">
        <CountrySearchFilter setSearchCountry={setSearchCountry} setFilterByRegion={setFilterByRegion} />

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-rows-none gap-15">
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