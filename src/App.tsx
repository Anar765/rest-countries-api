import { createContext, useEffect, useState, type SetStateAction } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetails";
import type { Country } from "./types/country.type";

interface AppContext {
  isDarkMode: boolean,
  setIsDarkMode: React.Dispatch<SetStateAction<boolean>>,
  countriesData: Country[]
}

export const AppContext = createContext<AppContext>({
  isDarkMode: false,
  setIsDarkMode: () => {},
  countriesData: []
});

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [countriesData, setCountriesData] = useState<Country[]>([]);

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

  return (
    <AppContext.Provider value={{isDarkMode, setIsDarkMode, countriesData}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/country/:alpha3Code" element={<CountryDetails />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App