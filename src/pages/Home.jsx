import { Box,Button } from "@mui/material";
import React from "react";
import {useNavigate} from "react-router-dom"

function Home() {
    const navigate= useNavigate()

    function handleClick(){
        navigate("/puzzle/makepic")
    }

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
			<Box >
				<h2>Admin Only!</h2>
                <Button onClick={handleClick} variant="contained">Make New Puzzle Piece</Button>
			</Box>
		</Box>
	);
}

export default Home;
