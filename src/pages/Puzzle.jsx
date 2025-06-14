import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PuzzleList from "./PuzzleList";

function Puzzle() {
	const [pieces, setPieces] = useState([]);
	const [filteredPieces, setFilteredPieces] = useState([]);
	const [search, setSearch] = useState("");

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
			setFilteredPieces(() => {
				pieces.filter((piece) => {
					return piece.name
						.toLowerCase()
						.includes(search.toLowerCase());
				});
			});
		} else {
			setFilteredPieces(pieces);
		}
	}, [pieces, search]);

	return (
		<div>
            <PuzzleList filteredPieces={filteredPieces}/>
			<Outlet context={{ filteredPieces, setSearch }} />
		</div>
	);
}

export default Puzzle;
