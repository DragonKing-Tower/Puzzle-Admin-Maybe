import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function useAdminGuard(admin) {
	const navigate = useNavigate();

	useEffect(() => {
		if (!admin) {
			navigate("/login");
		}
	}, [admin, navigate]);
}

export default useAdminGuard;
