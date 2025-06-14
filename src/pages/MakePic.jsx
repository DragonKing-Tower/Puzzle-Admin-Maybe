import React from "react";
import useAdminCheck from "../useAdminCheck";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Button, TextField } from "@mui/material";

function MakePic({ admin }) {
	useAdminCheck(admin);
	const { filteredPieces, setPieces } = useOutletContext();
	const [newPic, setnewPic] = useState({
		id: uuidv4(),
		name: "",
		description: "",
		image: "",
	});

	async function handleSubmit(e) {
		e.preventDefault();
		if (!Object.values(newPic).some((value) => value.trim() === "")) {
			try {
				const result = await fetch("http://localhost:5000/pictures", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newPic),
				});
				const data = await result.json();
				setPieces((prevPec) => [...prevPec, data]);
			} catch (error) {
				console.log("Error", error);
			} finally {
				setnewPic({
					id: uuidv4(), //this is why I can't make it a use hook
					name: "",
					description: "",
					image: "",
				});
			}
		}
	}

	function handleChange(e) {
		setnewPic((prevPec) => ({
			...prevPec,
			[e.target.name]: e.target.value,
		}));
	}

	return (
		<Box>
            <h2>Make New Pic</h2>
			<form onSubmit={handleSubmit}>
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
