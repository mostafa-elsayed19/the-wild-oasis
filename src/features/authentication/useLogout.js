import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userLogout } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
	const navigate = useNavigate();

	const queryClient = useQueryClient();
	const { mutate: logout, isLoading } = useMutation({
		mutationFn: userLogout,
		onSuccess: () => {
			queryClient.removeQueries({ queryKey: ["user"] });
			toast.success("Thank you, We will be waiting for you again");
			navigate("/login", { replace: true });
		},
	});

	return { logout, isLoading };
}
