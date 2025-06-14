import React from "react";
import useGoBack from "./useGoBack";

function handleFetch(e, inputValue, inputType, setPieces, goBack) {
	e.preventDefault();
	if (!Object.values(inputValue).some((value) => value.trim() === "")) {
		let url = "http://localhost:5000/pictures";
		const fetchOptions = {
			method: inputType,
			headers: {
				"Content-Type": "application/json",
			},
		};
		if (inputType !== "DELETE") {
			// Only send body if not DELETE
			fetchOptions.body = JSON.stringify(inputValue);
		}

		if (inputType === "DELETE" || inputType === "PATCH") {
			if (!inputValue.id) {
				console.error(`${inputType} request requires an id`);
				return;
			}
			url += `/${inputValue.id}`;
		}

		fetch(url, fetchOptions)
			.then((res) => res.json())
			.then((data) => {
				if (inputType === "DELETE") {
					setPieces((prev) =>
						prev.filter((p) => p.id !== inputValue.id)
					);
				} else if (inputType === "PATCH") {
					setPieces((prev) =>
						prev.map((p) => (p.id === data.id ? data : p))
					);
				} else if (inputType === "POST") {
					setPieces((prev) => [...prev, data]);
				}
			})
			.catch((error) => {
				console.error("Error:", error);
			})
			.finally(() => {
				goBack();
			});
	}
}

export default handleFetch;
