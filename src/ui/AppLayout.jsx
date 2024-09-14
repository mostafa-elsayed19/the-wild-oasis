import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
	display: grid;
	grid-template-columns: 26rem 1fr;
	grid-template-rows: auto 1fr;
	height: 100vh;
`;

const Main = styled.main`
	background-color: var(--color-grey-50);
	padding: 4rem 4.8rem 6.4rem;
	overflow: scroll;

	@supports not selector(::-webkit-scrollbar) {
		scrollbar-width: auto;
		scrollbar-color: var(--color-grey-700) transparent;
	}

	&::-webkit-scrollbar {
		width: 20px;
	}

	&::-webkit-scrollbar-track {
		background-color: transparent;
	}

	&::-webkit-scrollbar-thumb {
		/* background-color: #d6dee1; */
		background-color: var(--color-grey-700);
		border-radius: 20px;
		border: 6px solid transparent;
		background-clip: content-box;
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: var(--color-grey-500);
	}

	&::-webkit-scrollbar-corner {
		background-color: transparent;
	}
`;

const Container = styled.div`
	max-width: 120rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
`;

function AppLayout() {
	return (
		<StyledAppLayout>
			<Header />
			<Sidebar />
			<Main>
				<Container>
					<Outlet />
				</Container>
			</Main>
		</StyledAppLayout>
	);
}

export default AppLayout;
