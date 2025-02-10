import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authServices";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";

export default function CompleteProfileForm() {
  const navigate = useNavigate();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  //const [role, setRole] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const onSubmit = async (data) => {
    //This data comes from react hook form it is an object and consist email role and name
    console.log(data);
    try {
      const { message, user } = await mutateAsync(data);
      toast.success(message);
      if (user.status !== 2) {
        navigate("/");
        toast.error("پروفایل شما در دست بررسی است.");
        return;
      }
      if (user.role === "OWNER") {
        return navigate("/owner");
      }
      if (user.role === "FREELANCER") {
        return navigate("/freelancer");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex flex-col gap-y-6 items-center pt-10">
      <h1 className="font-bold text-3xl text-secondary-700">تکمیل اطلاعات</h1>
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="نام و نام خانوادگی"
            // value={name}
            // onChange={(e) => {
            //   setName(e.target.value);
            // }}
            required
            register={register}
            name="name"
            validationSchema={{ required: "نام و نام خانوادگی ضروری است" }}
            errors={errors}
          />
          <TextField
            label="ایمیل"
            // value={email}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            // }}
            required
            register={register}
            name="email"
            validationSchema={{
              required: "ایمیل ضروری است",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "فرمت ایمیل رعایت شود",
              },
            }}
            errors={errors}
          />
          <RadioInputGroup
            register={register}
            errors={errors}
            watch={watch}
            configs={{
              //I create this object manually and send some datas as prop
              name: "role", //I think this name specifies name of radio button group.
              validationSchema: { required: "انتخاب نقش ضروری است" },
              options: [
                { value: "FREELANCER", label: "فریلنسر" },
                { value: "OWNER", label: "کارفرما" },
              ],
            }}
          />
          {isPending ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
