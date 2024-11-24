import { useState } from "react";
import TextField from "../../ui/TextField";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authServices";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";
import { useNavigate } from "react-router-dom";

export default function CompleteProfileForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({
        name: name,
        email: email,
        role: role,
      });
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
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <TextField
            label="نام و نام خانوادگی"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
          />
          <TextField
            label="ایمیل"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
          />
          <div className="flex items-center justify-center gap-x-8">
            <RadioInput
              value="OWNER"
              label="کارفرما"
              name="role"
              id="OWNER"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
            <RadioInput
              value="FREELANCER"
              label="فریلنسر"
              name="role"
              id="FREELANCER"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
          </div>
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
