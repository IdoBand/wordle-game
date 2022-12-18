import { useContext } from "react";
import { wordleContext } from "../providers/wordleContext";
import { SharedLogicFunctions } from "./SharedLogicFunctions";

export function Home() {

    const { userInfo } = useContext<any>(wordleContext)
    

    return (
    <>
        <main id="home-container">
            <div id="welcome-message">Welcome! use the button on the right side of the header to navigate thruogh the site.</div>
        </main>
    </>
    )
}