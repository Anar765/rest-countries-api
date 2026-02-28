import { useEffect, useState } from "react";
import CountrySearchFilter from "./CountrySearchFilter";
import CountryCard from "./CountryCard";
import type { Country } from "../types/country.type";

const Main = () => {

  const [countriesData, setCountriesData] = useState<Country[]>([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("");

  useEffect(() => {
    const fetchCountriesData = async() => {
      try {
        const response = await fetch('/data.json');

        if(!response.ok) {
          throw new Error("Fetching failed!");
        }

        const data = await response.json();

        setCountriesData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCountriesData();
  }, []);

  useEffect(() => {
    console.log(countriesData)
  }, [countriesData]);

  return (
    <main className="w-full max-w-400 flex flex-col gap-12">
        <CountrySearchFilter setSearchCountry={setSearchCountry} setFilterByRegion={setFilterByRegion} />

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] grid-rows-none gap-15">
          {countriesData.filter(country => country.name.toLowerCase().startsWith(searchCountry.toLowerCase()) && country.region.includes(filterByRegion)).map((country, _) => (
            <CountryCard
              key={country.alpha3Code}
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