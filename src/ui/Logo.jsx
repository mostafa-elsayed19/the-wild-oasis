import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const StyledLogo = styled.div`
	text-align: center;
`;

const Img = styled.img`
	height: 9.6rem;
	width: auto;
`;

function Logo() {
	const { theme } = useTheme();

	const imgSrc = theme === "light-mode" ? "light" : "dark";
	return (
		<StyledLogo>
			<Img src={`/logo-${imgSrc}.png`} alt="Logo" />
		</StyledLogo>
	);
}

export default Logo;
