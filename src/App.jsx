import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Puzzle from "./pages/Puzzle";
import Pic from "./pages/Pic";
import EditPic from "./pages/EditPic";
import MakePic from "./pages/MakePic";
import Login from "./pages/Login";
import NavBar from "./NavBar";

function App() {
	const [admin, setAdmin] = useState(false);

	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/puzzle" element={<Puzzle />}>
						<Route path=":id" element={<Pic />}>
							<Route
								path="change"
								element={<EditPic admin={admin} />}
							/>
						</Route>
						<Route
							path="makepic"
							element={<MakePic admin={admin} />}
						/>
					</Route>
					<Route
						path="/login"
						element={<Login setAdmin={setAdmin} />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
