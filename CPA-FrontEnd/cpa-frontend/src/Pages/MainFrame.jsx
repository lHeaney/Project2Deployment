
//This is apparently a known bug, and no fix I have tried has resolved it. The issue is not germain to the functioning of the program, merely a warning
import {Header} from "../components/Header";
import { Outlet } from "react-router";



export const MainFrame = ()=>{


    //This just holds the header and the outlet for the navbar
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    );
}