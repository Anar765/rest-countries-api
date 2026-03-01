import { useContext } from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { AppContext } from "../App";
import { IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

const CountryDetails = () => {

    const { countriesData } = useContext(AppContext);
    const { alpha3Code } = useParams();
    const country: any = countriesData.filter((country => country.alpha3Code === alpha3Code))[0];

    return (
        <>
            <Header />
            <div className="flex flex-col items-start gap-20 w-full max-w-400">
                <Link to="/" className="bg-white shadow-[0px_0px_5px_3px_hsla(0,0%,50%,0.25)] py-2 pl-8 pr-10 flex items-center gap-2 rounded">
                    <IonIcon icon={arrowBackOutline} />
                    Back
                </Link>

                <div className="flex items-center gap-30">
                    <img src={country.flags.svg} alt="" className="max-w-175" />
                    <div>
                        <h2 className="text-4xl font-bold">{country.name}</h2>

                        <div className="country-data mt-10 mb-20 grid grid-flow-col grid-rows-5 gap-x-20 gap-y-1 w-max">
                            <p><span>Native Name:</span> {country.nativeName}</p>
                            <p><span>Population:</span> {country.population.toLocaleString()}</p>
                            <p><span>Region:</span> {country.region}</p>
                            <p><span>Sub region:</span> {country.subregion}</p>
                            <p><span>Capital:</span> {country.capital}</p>
                            <p><span>Top Level Domain:</span> {country.topLevelDomain.join('/')}</p>
                            <p><span>Currencies:</span> {country.currencies[0].name}</p>
                            <p><span>Languages:</span> {country.languages.map((language: any) => language.name).join(', ')}</p>
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
                                            <span key={borderCode} className="px-4 py-1 bg-white shadow-md rounded text-sm border border-gray-100">
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