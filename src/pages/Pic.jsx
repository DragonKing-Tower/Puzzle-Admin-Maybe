import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

function Pic() {
	const { id } = useParams();
	const { filteredPieces, setSearch,setPieces } = useOutletContext();
	const peice = filteredPieces.find((peice) => peice.id === id);

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
		</>
	);
}

export default Pic;
