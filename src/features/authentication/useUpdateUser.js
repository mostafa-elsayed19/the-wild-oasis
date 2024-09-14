import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
	const queryClient = useQueryClient();

	const { mutate: updateUser, isLoading: isUpdating } = useMutation({
		mutationFn: updateCurrentUser,
		onSuccess: () => {
			toast.success("User account succesfully updated");
			// Manually putting the user in the react query cache
			// queryClient.setQueryData('user', user)
			queryClient.invalidateQueries({ queryKey: ["user"] });
		},
		onError: (error) => toast.error(error.message),
	});

	return { updateUser, isUpdating };
}
