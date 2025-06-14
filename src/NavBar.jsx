import React from "react";
import {Link} from "react-router-dom"

function NavBar(){
    return(
       <header>
            <Link to={"/"} >Home</Link>
            <Link to={"/puzzle"}>Puzzle</Link>
            <Link to={"/login"}>Login</Link>
       </header>
    )
}

export default NavBar