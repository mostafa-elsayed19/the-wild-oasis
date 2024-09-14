import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const ThemeContext = createContext();

function ThemeColorProvider({ children }) {
	const preferedTheme = window.matchMedia("(prefers-color-scheme: dark)")
		.matches
		? "dark-mode"
		: "light-mode";
	const [theme, setTheme] = useLocalStorageState(preferedTheme, "theme");

	function toggleThemeColor() {
		setTheme((currentTheme) => {
			switch (currentTheme) {
				case "light-mode":
					return "dark-mode";
				case "dark-mode":
					return "light-mode";
				default:
					return "light-mode";
			}
		});
	}

	useEffect(() => {
		if (theme === "dark-mode") {
			document.documentElement.classList.add("dark-mode");
			document.documentElement.classList.remove("light-mode");
		} else {
			document.documentElement.classList.add("light-mode");
			document.documentElement.classList.remove("dark-mode");
		}
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleThemeColor }}>
			{children}
		</ThemeContext.Provider>
	);
}

function useTheme() {
	const context = useContext(ThemeContext);

	if (context === undefined)
		throw new Error(
			"ThemeColorContext was used outside of Theme Color Provider"
		);

	return context;
}

export { ThemeColorProvider, useTheme };
