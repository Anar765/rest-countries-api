import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

const NotFound = () => {
    return (
        <div className="p-20 text-center flex flex-col gap-10 items-center">
            <h2 className="text-2xl font-bold">Country not found!</h2>
            <Link to="/" className="bg-white dark:bg-Blue-900 shadow-[0px_0px_5px_3px_hsla(0,0%,50%,0.25)] dark:shadow-Grey-950 py-2 px-6 flex items-center gap-2 rounded">
                <IonIcon icon={arrowBackOutline} />
                Back
            </Link>
        </div>
    )
}

export default NotFound