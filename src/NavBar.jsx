import React from "react";
import { Link } from "react-router-dom";
import { AppBar,Toolbar,Box } from "@mui/material";

function NavBar() {
	return (
		<AppBar position="absolute" color="transparent">
			<Toolbar>
				<Box sx={{ display: "flex", gap: 2, justifyContent:"space-around", width:"100%" }}>
					<Link to={"/"}>Home</Link>
					<Link to={"/puzzle"}>Puzzle</Link>
					<Link to={"/login"}>Login</Link>
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default NavBar;
