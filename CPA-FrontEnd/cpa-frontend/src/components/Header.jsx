//this is the header for the react app. It should be visible on every page
import "../App.css";

import { NavBar } from "./NavBar";
export const Header = () => {
    return (
        //I want to say that I am not a creative person and front-end applications are not my specialty
        //So do not blame me for how bad this looks
        <>
            <header>
                <h1>
                    Public Accountant Assistance Program
                </h1>
                <h3>
                    Sort and organize your filings! Never forget an account again!
                </h3>
                <NavBar>
                </NavBar>
            </header>
            

        </>
    )
}