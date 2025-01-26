/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";
import useCreateProposal from "./useCreateProposal";
import { toEnglishNumbers } from "../../utils/toPersianNumbers";
export default function CreateProposalForm({ onClose, projectID }) {
  const { createProposal, isCreating } = useCreateProposal();
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const submitForm = (data) => {
    data.duration = Number(toEnglishNumbers(data.duration));
    data.price = Number(toEnglishNumbers(data.price));
    const newProposal = { ...data, projectId: projectID };
    createProposal(newProposal, {
      onSuccess: () => {
        onClose();
      },
    });
  };
  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(submitForm)}>
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          errors={errors}
          validationSchema={{
            required: "درج توضیحات ضروری است.",
            minLength: { value: 10, message: "حداقل طول توضیحات 10 کاراکتر" },
            maxLength: { value: 50, message: "حداکثر طول توضیحات 50 کاراکتر" },
          }}
        />
        <TextField
          label="تعداد روز پیشنهادی"
          placeholder="بر حسب روز"
          name="duration"
          register={register}
          required
          setValue={setValue}
          errors={errors}
          validationSchema={{
            required: "تعداد روز پیشنهادی را مشخص نمایید",
            pattern: {
              value: /^[\u06F0-\u06F9\u0030-\u0039,]+$/, //This regex accepts persian and english digits and comma
              message: "تعداد روز پیشنهادی بصورت عدد وارد شود.",
            },
          }}
        />
        <TextField
          label="مبلغ پیشنهادی"
          placeholder="به ریال "
          name="price"
          register={register}
          required
          setValue={setValue}
          errors={errors}
          validationSchema={{
            required: "مبلغ پیشنهادی را مشخص نمایید",
            pattern: {
              value: /^[\u06F0-\u06F9\u0030-\u0039,]+$/, //This regex accepts persian and english digits and comma
              message: "مبلغ پیشنهادی بصورت عدد وارد شود.",
            },
          }}
        />
        <div className="!mt-8">
          {isCreating ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
