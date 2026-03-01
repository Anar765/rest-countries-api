import { useContext } from "react"
import { AppContext } from "../App"
import { moonOutline, sunnyOutline } from "ionicons/icons"
import { IonIcon } from "@ionic/react"

const Header = () => {

    const { isDarkMode, setIsDarkMode } = useContext(AppContext);

    return (
        <header className="dark:bg-Blue-900 dark:shadow-Grey-950 bg-white shadow-Grey-400 w-full px-4 py-8 md:py-5 flex items-center justify-center shadow-sm">
            <div className="w-full max-w-400 min-[2240px]:max-w-500 flex items-center justify-between">
                <h1 className="text-sm md:text-3xl font-bold">Where in the world?</h1>
                <button onClick={() => setIsDarkMode(prevState => !prevState)} className="text-sm md:text-lg flex items-center gap-2 md:gap-3">
                    {/* Icon */}
                    <IonIcon icon={isDarkMode ? sunnyOutline : moonOutline} className="w-4 h-4 md:w-5 md:h-5" />
                    <p className="font-semibold">{isDarkMode ? "Light" : "Dark"} Mode</p>
                </button>
            </div>
        </header>
    )
}

export default Header