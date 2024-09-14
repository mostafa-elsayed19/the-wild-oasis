import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
	height: 100vh;
	background-color: var(--color-grey-50);
	display: flex;
	align-items: center;
	justify-content: center;
`;

function ProtectedRoute({ children }) {
	const navigate = useNavigate();
	// Load the Authenticated user
	const { isLoading, isAuthenticated } = useUser();

	// If there is no Authenticated user >>> reditrect to login page
	useEffect(() => {
		if (!isAuthenticated && !isLoading) navigate("/login", { replace: true });
	}, [isAuthenticated, isLoading, navigate]);

	// While Loading, show Spinner
	if (isLoading)
		return (
			<FullPage>
				<Spinner />
			</FullPage>
		);

	// If there is a user render the app
	if (isAuthenticated) return children;
}

export default ProtectedRoute;
