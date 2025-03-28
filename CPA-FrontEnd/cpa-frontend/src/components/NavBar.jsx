
import "../App.css";
import { Link } from "react-router";

export const NavBar =()=>
    {
        const links =[
            {id:1, linkname: "NewRecord", linkDestination: "/NewRecord"},
            {id:2, linkname: "RecordSearch", linkDestination: "/RecordSearch"},
            {id:3, linkname: "Login", linkDestination: "/Login"},
        ]
        return (
            //Pretty basic navbar: login, new record, and record search pages are available
            //The recordsearch and newRecord links do not appear if you are not logged in
            <nav>
                    {links.filter(link=>{if(link.id===3||localStorage.getItem("username")!=="")return true} ).map(link => {
                            return (<Link to={link.linkDestination} key={link.id}>{link.linkname}</Link>);
                            }
                        )
                        }
            </nav>
        )
    }