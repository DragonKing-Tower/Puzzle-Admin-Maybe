import { Button } from "@mui/material";
import React from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";

function Pic() {
	const { id } = useParams();
	const { filteredPieces, setPieces } = useOutletContext();
	const peice = filteredPieces.find((peice) => peice.id === id);
    const navigate = useNavigate()
    function handleClick() {
		navigate(`/puzzle/${id}/change`);
	}

	if (!peice) {
		return <p>Loading or invalid picture ID.</p>;
	}

	return (
		<>
			<h3>{peice.name}</h3>
			<img
				src={peice.image}
				alt={`${peice.name} Picture`}
				style={{ width: "300px", height: "auto", objectFit: "contain" }}
			/>
			<p>{peice.description}</p>
            <h3>Admin Only!</h3>
            <Button variant="contained" onClick={handleClick}>Edit Piece</Button>
		</>
	);
}

export default Pic;
