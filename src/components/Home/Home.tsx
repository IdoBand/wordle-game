import { useContext } from "react";
import { userContext } from "../../providers/userContext";

export function Home() {

    const { user, setUser } = useContext<any>(userContext)
    let localStorageUser = JSON.parse(localStorage.getItem('user') as string)
    return (
    <>
        <div id="welcome-container">
            <div id="welcome-message">
                Welcome {localStorageUser? localStorageUser.firstName: ''}! use the button on the right side of the header to navigate through the site.
            </div>
        </div>
    </>
    )
}

