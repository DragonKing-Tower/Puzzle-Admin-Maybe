import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

function Login({ setAdmin }) {
    const [answer,setAnswer]= useState("")

    function handleSubmit(e){
        e.preventDefault()
        if (answer === "Troll"){
            setAdmin(true)
            setAnswer("YES!")
        }
        else if (answer.toLowerCase()==="troll"){
            setAnswer("Put Some Respect On That Name!!")
        }else{
            setAnswer("Wrong")
        }
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
			<h1>Attempting Login?</h1>
			<h3>Hint: First Letter</h3>
			<form onSubmit={handleSubmit} >
				<TextField value={answer} onChange={(e)=>{setAnswer(e.target.value)}}></TextField>
				<Button type="submit" color="primary" variant="contained">
					Check Answer
				</Button>
			</form>
		</Box>
	);
}

export default Login;
