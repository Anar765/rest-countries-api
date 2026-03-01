import { IonIcon } from "@ionic/react";
import { searchSharp, chevronDownSharp } from "ionicons/icons";
import { useState } from "react";

const CountrySearchFilter = ({ setSearchCountry, setFilterByRegion }: { setSearchCountry: (state: string) => void, setFilterByRegion: (state: string) => void }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 w-full">
            <label htmlFor="searchCountry" className="shadow-md dark:bg-Blue-900 dark:shadow-Grey-900 w-full md:max-w-110 bg-white flex items-center gap-4 px-6 border border-transparent rounded has-focus:outline-1 has-focus:border-white">
                <IonIcon icon={searchSharp} className="w-6 h-6 text-Blue-900 dark:text-white"></IonIcon>

                <input
                    type="search"
                    name="searchCountry"    
                    id="searchCountry"
                    placeholder="Search for a country..."
                    onChange={(e) => setSearchCountry(e.currentTarget.value)}
                    className="w-full py-4 focus:border-0 focus:outline-0" />
            </label>

            <div className="relative">
                <button role="select" onClick={() => setIsDropdownOpen(prevState => !prevState)} className="w-50 flex items-center justify-between p-4 bg-white dark:bg-Blue-900 rounded-lg">
                    <p>Filter by Region</p>
                    <IonIcon icon={chevronDownSharp} className={`${isDropdownOpen ? "rotate-180" : "rotate-0"} transition-all`} />
                </button>
                {isDropdownOpen && <div className="region-buttons absolute bg-white dark:bg-Blue-900 flex flex-col w-full mt-1 rounded-lg gap-2 p-4">
                    <button onClick={() => setFilterByRegion("")}>All</button>
                    <button onClick={() => setFilterByRegion("Africa")}>Africa</button>
                    <button onClick={() => setFilterByRegion("Americas")}>America</button>
                    <button onClick={() => setFilterByRegion("Asia")}>Asia</button>
                    <button onClick={() => setFilterByRegion("Europe")}>Europe</button>
                    <button onClick={() => setFilterByRegion("Oceania")}>Oceania</button>
                </div>}
            </div>
        </div>
    )
}

export default CountrySearchFilter