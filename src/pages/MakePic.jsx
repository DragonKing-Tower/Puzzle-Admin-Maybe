import React from "react";
import useAdminCheck from "../useAdminCheck";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Button, TextField } from "@mui/material";
import useGoBack from "../useGoBack";
import handleFetch from "../handleFetch";

function MakePic({ admin }) {
    const goBack = useGoBack()
	useAdminCheck(admin);
	const { filteredPieces, setPieces } = useOutletContext();
	const [newPic, setnewPic] = useState({
		id: uuidv4(),
		name: "",
		description: "",
		image: "",
	});

	function handleChange(e) {
		setnewPic((prevPec) => ({
			...prevPec,
			[e.target.name]: e.target.value,
		}));
	}

	return (
		<Box>
            <h2>Make New Pic</h2>
			<form onSubmit={(e)=>handleFetch(e,newPic,"POST",setPieces,goBack)}>
				<TextField
					name="name"
					value={newPic.name}
					label="name"
					onChange={handleChange}
				/>
				<TextField
					name="description"
					value={newPic.description}
					label="description"
					onChange={handleChange}
				/>
				<TextField
					name="image"
					value={newPic.image}
					label="image"
					onChange={handleChange}
				/>
				<Button type="submit">Add New Puzzle Piece</Button>
			</form>
		</Box>
	);
}

export default MakePic;
