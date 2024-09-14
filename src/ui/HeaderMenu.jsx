import styled from "styled-components";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMeny = styled.ul`
	display: flex;
	gap: 0.4rem;

	li:last-child {
		margin-left: 2rem;
	}
`;

function HeaderMenu() {
	const navigate = useNavigate();
	return (
		<StyledHeaderMeny>
			<li>
				<ButtonIcon onClick={() => navigate("/account")}>
					<HiOutlineUser />
				</ButtonIcon>
			</li>
			<li>
				<Logout />
			</li>
			<li>
				<DarkModeToggle />
			</li>
		</StyledHeaderMeny>
	);
}

export default HeaderMenu;
