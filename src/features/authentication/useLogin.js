import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
	const navigate = useNavigate();

	const queryClient = useQueryClient();
	const { mutate: login, isLoading } = useMutation({
		mutationFn: loginApi,
		onSuccess: (data) => {
			let { fullName } = data.user.user_metadata;
			toast.success(`Welcome Mr ${fullName}`);
			// we can manually put data in the query
			queryClient.setQueryData(["user"], data.user);
			navigate("/dashboard", { replace: true });
		},
		onError: (err) => {
			console.log("ERROR", err);
			toast.error("Provided login credientials are incorrect");
		},
	});

	return { login, isLoading };
}
