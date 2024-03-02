/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdateSetting() {
	const QueryClient = useQueryClient();

	const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
		mutationFn: updateSettingApi,
		onSuccess: () => {
			toast.success("Settings successfully updated");
			QueryClient.invalidateQueries({ queryKey: ["settings"] });
		},
		onError: (err) => toast.error(err.message),
	});
	return { isUpdating, updateSetting };
}
