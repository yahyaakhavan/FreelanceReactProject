import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
export default function CreateProjectForm() {
  const {
    register,

    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log({ data });
  };
  // const inputValue = watch("projectBudget", "");
  // console.log(inputValue);
  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        register={register}
        label="عنوان پروژه"
        name="projectTitle"
        required
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: { value: 10, message: "طول عنوان نامعتبر است." },
          //pattern: { value: /^[a-zA-Z0-9]*$/, message: "طبق الگو." },
        }}
        errors={errors}
      />
      <TextField
        register={register}
        label="شرح پروژه"
        name="projectDesc"
        required
        validationSchema={{
          required: "شرح پروژه الزامی است.",
          maxLength: { value: 20, message: "طول شرح بیش از 20 کاراکتر است." },
        }}
        errors={errors}
      />
      <TextField
        register={register}
        label="بودجه پروژه"
        name="projectBudget"
        required
        validationSchema={{
          required: "درج بودجه ضروری است",
          pattern: {
            value: /^[\u06F0-\u06F9\u0030-\u0039,]+$/, //This regex accepts persian and english digits and comma
            message: "مبلغ بصورت عدد وارد شود.",
          },
        }}
        // type="number"
        errors={errors}
        setValue={setValue}
      />
      <button type="submit" className="btn btn--primary w-full">
        تایید
      </button>
    </form>
  );
}
