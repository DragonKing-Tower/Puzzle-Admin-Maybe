import React from "react";
import useAdminCheck from "../useAdminCheck";
import { useOutletContext } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import useGoBack  from "../useGoBack";
import handleFetch from "../handleFetch";

function EditPic({ admin }) {
	useAdminCheck(admin);
	console.log("mounted EditPic");

	const { setPieces, piece } = useOutletContext();
	const [editingpiece, setPiece] = useState(piece);
	const goBack = useGoBack();

	function handleChange(e) {
		setPiece((prevPec) => ({
			...prevPec,
			[e.target.name]: e.target.value,
		})); //could make this a useHandleChange, but there are only two of them and small ones at that
	}

	return (
		<Box>
			<Button
				type="button"
				onClick={(e) =>
					handleFetch(e, editingpiece, "DELETE", setPieces, goBack)
				}
			>
				Delete
			</Button>
			<form
				onSubmit={(e) =>
					handleFetch(e, editingpiece, "PATCH", setPieces, goBack)
				}
			>
				<TextField
					name="name"
					value={editingpiece.name}
					label="name"
					onChange={handleChange}
				/>
				<TextField
					name="description"
					value={editingpiece.description}
					label="description"
					onChange={handleChange}
				/>
				<TextField
					name="image"
					value={editingpiece.image}
					label="image"
					onChange={handleChange}
				/>
				<Button type="submit">Edit Puzzle Piece</Button>
			</form>
		</Box>
	);
}

export default EditPic;
