/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
	const QueryClient = useQueryClient();

	const { isLoading: isCreating, mutate: createCabin } = useMutation({
		mutationFn: createEditCabin,
		onSuccess: () => {
			toast.success("new cabin created successfully");
			QueryClient.invalidateQueries({ queryKey: ["cabins"] });
			// reset();
		},
		onError: (err) => toast.error(err.message),
	});
	return { isCreating, createCabin };
}
