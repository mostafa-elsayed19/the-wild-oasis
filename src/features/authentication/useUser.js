import { useQuery } from "@tanstack/react-query";
import { loadCurrentUser } from "../../services/apiAuth";

export function useUser() {
	const { isLoading, data: user } = useQuery({
		queryKey: ["user"],
		queryFn: loadCurrentUser,
	});

	return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
