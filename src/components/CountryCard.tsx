import type { Country } from "../types/country.type"

const CountryCard = ({ name, population, region, capital, flags }: Country) => {
    return (
        <div className='flex flex-col bg-white text-start rounded overflow-hidden pb-5 shadow-md shadow-Grey-400'>
            {/* 1. Flag Container: Keeps all cards the same height */}
            <div className="aspect-16/10 w-full overflow-hidden bg-gray-100">
                <img 
                    src={flags.png} 
                    alt={`${name} flag`} 
                    className="w-full h-full object-cover" 
                />
            </div>
            <div className='p-5'>
                <h3 className="text-2xl font-bold text-Blue-950">{name}</h3>
                <div className="country-data mt-3 space-y-1">
                    <p><span>Population:</span> {population.toLocaleString()}</p>
                    <p><span>Region:</span> {region}</p>
                    <p><span>Capital:</span> {capital}</p>
                </div>
            </div>
        </div>
    )
}

export default CountryCard