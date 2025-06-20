import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PuzzleList from "./PuzzleList";
import Search from "./Search";
import { Box, Button } from "@mui/material";

function Puzzle() {
	const [pieces, setPieces] = useState([]);
	const [filteredPieces, setFilteredPieces] = useState([]);
	const [search, setSearch] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		async function getPieces() {
			try {
				const result = await fetch("http://localhost:5000/pictures");
				const data = await result.json();
				setPieces(() => data);
			} catch (error) {
				console.log("Error:", error);
			}
		}
		getPieces();
	}, []);

	useEffect(() => {
		if (search) {
			setFilteredPieces(
				pieces.filter((piece) =>
					piece.name.toLowerCase().includes(search.toLowerCase())
				)
			);
		} else {
			setFilteredPieces(pieces);
		}
	}, [pieces, search]);

	function handleClick() {
		navigate("/puzzle/makepic");
	}

	return (
		<Box
			sx={{
				display: "flex",
				height: "80vh",
				justifyContent: "flex-start",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					width: 300,
					borderRight: 1,
					borderColor: "divider",
					padding: 2,
					boxSizing: "border-box",
					backgroundColor: "orange",
				}}
			>
				<Search setSearch={setSearch} />
			</Box>
			<Box
				sx={{
					flex: 1,
					padding: 2,
					overflowY: "auto",
				}}
			>
				<PuzzleList filteredPieces={filteredPieces} />
				<Outlet context={{ filteredPieces, setPieces }} />
				<Button onClick={handleClick} variant="contained">
					Make New Puzzle Piece
				</Button>
			</Box>
		</Box>
	);
}

export default Puzzle;
