/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../../ui/RadioInputGroup";
import useChangeUserStatus from "./useChangeUserStatus";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import Loader from "../../../ui/Loader";

export default function ChangeUserState({ onClose, userID, userStatus }) {
  const { mutate, isPending } = useChangeUserStatus();
  const queryClient = useQueryClient();
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();
  const handleClick = (data) => {
    console.log(data, userID);

    mutate(
      { id: userID, data },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          queryClient.invalidateQueries("users");
          onClose();
        },
        onError: (err) => {
          return toast.error(err.message);
        },
      }
    );
  };

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit(handleClick)}
      action="submit"
    >
      <RadioInputGroup
        configs={{
          name: "status",
          options: [
            { value: 0, label: "عدم تایید" },
            { value: 1, label: "در انتظار تایید" },
            { value: 2, label: "تایید شده" },
          ],
        }}
        register={register}
        watch={watch}
        errors={errors}
        prevSelectItem={userStatus}
      />
      {isPending ? (
        <Loader />
      ) : (
        <button className="btn btn--primary w-full">تایید</button>
      )}
    </form>
  );
}
