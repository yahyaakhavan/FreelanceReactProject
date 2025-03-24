import { useEffect, useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

export default function AuthContainer() {
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    //user can not see auth page if he/she has logged in before
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);
  const sendOtpHandler = async (data) => {
    //This data comes from react hook form and it is an object with phoneNumber property and it's value
    try {
      Setstep(2);
      //This is an async request so, we put async and await keywords
      const { message } = await mutateAsync(data); //This data comes from react hook form and it is an object with phoneNumber property and it's value
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message); // we put ?. if it has not value we get undefiend instead of null
    }
  };
  //const [phoneNumber, setPhoneNumber] = useState(""); ==> We use react hook form, so we do not need this state
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }, //If we want to have validation error, need to have errors from formState.
  } = useForm();

  const [step, Setstep] = useState(1);
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            register={register}
            SetStep={Setstep}
            //phoneNumber={phoneNumber}
            // onChange={(e) => {
            //   setPhoneNumber(e.target.value);
            // }}
            sendOtpHandler={handleSubmit(sendOtpHandler)}
            isPending={isPending}
            errors={errors}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")} //we do not use react hook form in CheckOTPForm component
            //  but, we need phoneNumber, so we use getValues to
            //  pass the field to this component
            onBack={() => {
              Setstep((current) => {
                return current - 1;
              });
            }}
            sendOtpHandler={handleSubmit(sendOtpHandler)}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  const {
    error,
    data: otpResponse,
    isPending,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  return (
    <div className="w-full sm:max-w-sm sm:border sm:p-8">{renderStep()}</div> // Inside div tag we call renderStep() function.
  );
}
