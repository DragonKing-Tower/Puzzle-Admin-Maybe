import { Button } from "@mui/material";
import React from "react";
import {
	useParams,
	useOutletContext,
	useNavigate,
	Outlet,
} from "react-router-dom";

function Pic() {
	console.log("pic mounted");
	const { id } = useParams();
	const { filteredPieces, setPieces } = useOutletContext();
	const piece = filteredPieces.find((piece) => piece.id === id);
	const navigate = useNavigate();
	function handleClick() {
		navigate(`/puzzle/${id}/change`);
	}

	if (!piece) {
		return <p>Loading or invalid picture ID.</p>;
	}

	console.log("filteredPieces:", filteredPieces);
	console.log("id from params:", id);
	console.log("found piece:", piece);

	return (
		<>
			<h3>{piece.name}</h3>
			<img
				src={piece.image}
				alt={`${piece.name} Picture`}
				style={{ width: "300px", height: "auto", objectFit: "contain" }}
			/>
			<p>{piece.description}</p>
			<Outlet context={{ setPieces, piece }}>Outlet Rendered</Outlet>
			<h3>Admin Only!</h3>
			<Button variant="contained" onClick={handleClick}>
				Edit Piece
			</Button>
		</>
	);
}

export default Pic;
