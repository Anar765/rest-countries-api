import { useContext } from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../App";
import { IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import NotFound from "./NotFound";

const CountryDetails = () => {

    const { countriesData } = useContext(AppContext);
    const { alpha3Code } = useParams();
    const country: any = countriesData.find((country => country.alpha3Code === alpha3Code));

    if(!country) {
        return <NotFound />
    }

    return (
        <>
            <Header />
            <div className="flex flex-col items-start gap-15 md:gap-20 w-full max-w-400 px-6 pb-10">
                <Link to="/" className="bg-white dark:bg-Blue-900 shadow-[0px_0px_5px_3px_hsla(0,0%,50%,0.25)] dark:shadow-Grey-950 py-2 pl-8 pr-10 flex items-center gap-2 rounded">
                    <IonIcon icon={arrowBackOutline} />
                    Back
                </Link>

                <div className="w-full flex flex-col min-[1440px]:flex-row items-center justify-center gap-10 md:gap-30">
                    <img src={country.flags.svg} alt="" className="w-full md:max-w-175" />
                    <div className="md:max-w-175">
                        <h2 className="text-4xl font-bold">{country.name}</h2>

                        <div className="country-data mt-10 mb-10 md:mb-20 grid md:grid-flow-col md:grid-rows-5 gap-x-20 gap-y-1 w-max">
                            <p><span className="font-bold">Native Name:</span> {country.nativeName || "N/A"}</p>
                            <p><span className="font-bold">Population:</span> {country.population?.toLocaleString() || "0"}</p>
                            <p><span className="font-bold">Region:</span> {country.region || "N/A"}</p>
                            <p><span className="font-bold">Sub region:</span> {country.subregion || "N/A"}</p>
                            <p><span className="font-bold">Capital:</span> {country.capital || "N/A"}</p>
                            <p className="mt-10 md:mt-0"><span className="font-bold">Top Level Domain:</span> {country.topLevelDomain?.join(', ') || "N/A"}</p>
                            <p><span className="font-bold">Currencies:</span> {country.currencies?.[0]?.name || "None"}</p>
                            <p><span className="font-bold">Languages:</span> {country.languages ? country.languages.map((l: any) => l.name).join(', ') : "N/A"}</p>
                        </div>

                        <div>
                            <p className="flex flex-wrap gap-2 items-center">
                                <span className="font-bold">Border Countries:</span> 
                                {country.borders && country.borders.length > 0 ? (
                                    country.borders.map((borderCode: string) => {
                                        // Find the country object that matches this code
                                        const borderCountry = countriesData.find(c => c.alpha3Code === borderCode);
                                        
                                        // Return the name (or the code as a fallback)
                                        return (
                                            <span key={borderCode} className="px-4 py-1 bg-white shadow-md rounded text-sm shadow-Grey-400 dark:bg-Blue-900 dark:shadow-Grey-950">
                                                {borderCountry ? borderCountry.name : borderCode}
                                            </span>
                                        );
                                    })
                                ) : (
                                    <span>None</span>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountryDetails