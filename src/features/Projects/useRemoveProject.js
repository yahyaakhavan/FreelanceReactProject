import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectAPI } from "../../services/projectServices";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const queryClient = useQueryClient();
  const { mutate: removeProject /**changeing name */, isPending } = useMutation(
    {
      mutationFn: removeProjectAPI,
      onSuccess: (data) => {
        //This data comes from projectServices.js and deleteproject function
        console.log(data);
        toast.success(data.message);
        queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
      },
      onError: (err) => {
        //This err also comes from projectServices.js and deleteproject function
        console.log(err);
        toast.error(err?.response?.data?.message);
      },
    }
  );

  return { removeProject, isPending };
}
