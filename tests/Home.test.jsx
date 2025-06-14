import { render, screen } from "@testing-library/react";
import Home from "../src/pages/Home";

describe("Home", () => {
	test("renders site title and description", () => {
		render(<Home />);
		expect(screen.getByText(/Welcome to this puzzle/i)).toBeInTheDocument();
		expect(
			screen.getByText(
				/Try to figure out the password from the puzzle pieces./i
			)
		).toBeInTheDocument();
	});

	test("renders navigation links", () => {
		render(<Home />);
		expect(
			screen.getByRole("button", { name: /Make new Puzzle Piece/i })
		).toBeInTheDocument();
		expect(
			screen.getByRole("link", { name: /Products/i })
		).toBeInTheDocument();
	});
});
