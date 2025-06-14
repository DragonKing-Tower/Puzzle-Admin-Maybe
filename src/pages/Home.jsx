import { Box } from "@mui/material";
import React from "react";

function Home() {
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			textAlign="center"
			height="100vh"
		>
			<h1>Welcome to this puzzle</h1>
			<h3>Try to figure out the password from the puzzle pieces.</h3>
		</Box>
	);
}

export default Home;
