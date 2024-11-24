import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authServices";
import toast from "react-hot-toast";

export default function AuthContainer() {
  const [phoneNumber, setPhoneNumber] = useState("09126085623");
  const [step, Setstep] = useState(2);
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            SetStep={Setstep}
            phoneNumber={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            sendOtpHandler={sendOtpHandler}
            isPending={isPending}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={phoneNumber}
            onBack={() => {
              Setstep((current) => {
                return current - 1;
              });
            }}
            sendOtpHandler={sendOtpHandler}
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

  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      Setstep(2);
      //This is an async request so, we put async and await keywords
      const data = await mutateAsync({ phoneNumber: phoneNumber });
      //toast.success(data.message);
      console.log(data);
    } catch (error) {
      toast.error(error?.response?.data?.message); // we put ?. if it has not value we get undefiend instead of null
    }
  };

  return (
    <div className="w-full sm:max-w-sm sm:border sm:p-8">{renderStep()}</div>
  );
}
