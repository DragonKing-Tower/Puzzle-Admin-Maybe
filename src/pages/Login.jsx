import React from "react";
import { Box } from "@mui/material";

function Login({setAdmin}){
    return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			textAlign="center"
			height="100vh"
		>
			<h1>Attempting Login?</h1>
			<h3>Hint: First Letter</h3>
		</Box>
	);;
}

export default Login