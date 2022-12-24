import { useContext } from "react";
import { userContext } from "../providers/userContext";

export function Home() {

    const { user, setUser } = useContext<any>(userContext)
    

    return (
    <>
    <main id="home-container">
        <div id="welcome-message">Welcome {user? user.firstName: ''}! use the button on the right side of the header to navigate thruogh the site.</div>
    </main>
    </>
    )
}