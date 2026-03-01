import { useContext } from "react"
import { AppContext } from "../App"
import { moonOutline, sunnyOutline } from "ionicons/icons"
import { IonIcon } from "@ionic/react"

const Header = () => {

    const { isDarkMode, setIsDarkMode } = useContext(AppContext)

    return (
        <header className="w-full py-5 flex items-center justify-center bg-white shadow-sm shadow-Grey-400">
            <div className="w-full max-w-400 flex items-center justify-between">
                <h1 className="text-3xl font-bold">Where in the world?</h1>
                <button onClick={() => setIsDarkMode(prevState => !prevState)} className="text-lg flex items-center gap-3">
                    {/* Icon */}
                    <IonIcon icon={isDarkMode ? moonOutline : sunnyOutline} className="w-5 h-5" />
                    <p className="font-semibold">{isDarkMode ? "Dark" : "Light"} Mode</p>
                </button>
            </div>
        </header>
    )
}

export default Header