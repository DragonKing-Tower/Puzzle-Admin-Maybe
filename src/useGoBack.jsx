import { useNavigate, useLocation } from "react-router-dom";

function useGoBack() {
	const navigate = useNavigate();
	const location = useLocation();

	function goToParent() {
		const path = location.pathname;

		// Remove trailing slash
		const trimmedPath =
			path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;

		// Split path into segments
		const segments = trimmedPath.split("/");

		// Remove the last segment (current route)
		if (segments.length > 1) {
			segments.pop();
		}

		// Build the parent path or fallback to root
		const parentPath = segments.length === 1 ? "/" : segments.join("/");

		navigate(parentPath);
	}

	return goToParent;
}

export default useGoBack;
