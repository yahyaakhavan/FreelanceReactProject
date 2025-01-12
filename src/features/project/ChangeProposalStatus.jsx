/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import { useChangeProposalStatus } from "./useChangeProposalStatus";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import Loader from "../../ui/Loader";
export default function ChangeProjectStatus({
  proposalID: id,
  onClose,
  proposalCurrentStatus,
}) {
  const { register, handleSubmit } = useForm();
  const QueryClient = useQueryClient();
  const options = [
    { value: 0, lable: "رد شده" },
    { value: 1, lable: "در انتظار تایید" },
    { value: 2, lable: "تایید شده" },
  ];
  const { id: projectID } = useParams();
  const { isPending, changeProjectStatus } = useChangeProposalStatus();
  const onSubmit = (data) => {
    changeProjectStatus(
      { id, data },
      {
        onSuccess: () => {
          onClose();
          QueryClient.invalidateQueries({ queryKey: ["project", projectID] });
        },
      }
    );
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RHFSelect
        name="status"
        lable="تغییر وضعیت پروپوزال"
        register={register}
        options={options}
        required
        prevValue={proposalCurrentStatus}
      />
      {isPending ? (
        <Loader />
      ) : (
        <button type="submit" className="mt-8 btn btn--primary w-full">
          تایید
        </button>
      )}
    </form>
  );
}
