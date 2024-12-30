import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { createProjectAPI } from "../../services/projectServices";
export default function useCreateProject() {
  const queryClient = useQueryClient();
  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectAPI,
    onSuccess: (data) => {
      //The previous version was toast the data and i get horrible error so, I changed to data.message
      console.log(data.message);
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { isCreating, createProject };
}
