/* eslint-disable react/prop-types */
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { HiArrowRight } from "react-icons/hi";
import Loader from "../../ui/Loader";
const TIMER_VALUE = 5;
export default function CheckOTPForm({
  phoneNumber,
  onBack,
  sendOtpHandler,
  otpResponse,
}) {
  const [otp, setOtp] = useState("");
  const [timer, Settimer] = useState(TIMER_VALUE);
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });
  const checkOTPHandler = async (e) => {
    e.preventDefault();
    try {
      const { user, message } = await mutateAsync({
        phoneNumber: phoneNumber,
        otp: otp,
      });

      toast.success(message);
      if (!user.isActive) {
        return navigate("/complete-Profile");
      }
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
      toast.error(
        error?.response?.data?.message
      ); /* we put ?. if it has not value we get undefiend instead of null*/
    }
  };
  useEffect(() => {
    const t =
      timer > 0 &&
      setInterval(() => {
        Settimer((current) => {
          return current - 1;
        });
      }, 1000);

    return () => {
      if (t) {
        clearInterval(t);
      }
    };
  }, [timer]);
  return (
    <div className="p-2">
      <button
        className="absolute top-0 right-0 pt-10 sm:static sm:pt-0"
        onClick={onBack}
      >
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      <form className="space-y-10" onSubmit={checkOTPHandler}>
        {otpResponse && (
          <p className="flex items-center gap-x-2 my-4">
            <span>{otpResponse?.message}</span>
            <button onClick={onBack}>
              <CiEdit className="w-6 h-6 text-primary-900" />
            </button>
          </p>
        )}
        <div className="mb-4 text-secondary-500">
          {timer > 0 ? (
            <p>{timer} ثانیه تا دریافت مجدد کد یکبار مصرف</p>
          ) : (
            <button onClick={sendOtpHandler}> دریافت مجدد کد تایید</button>
          )}
        </div>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-300))",
            borderRadius: "0.5rem",
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
  );
}
