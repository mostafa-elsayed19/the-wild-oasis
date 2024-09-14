import { HiOutlineMoon } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { HiOutlineSun } from "react-icons/hi2";
import { useTheme } from "../context/ThemeContext";
function DarkModeToggle() {
	const { theme, toggleThemeColor } = useTheme();
	return (
		<ButtonIcon onClick={toggleThemeColor}>
			{theme === "light-mode" ? <HiOutlineMoon /> : <HiOutlineSun />}
		</ButtonIcon>
	);
}

export default DarkModeToggle;
