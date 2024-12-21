/* eslint-disable react/prop-types */
import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";
export default function SendOTPForm({
  // phoneNumber,
  // onChange,
  register,
  isPending,
  sendOtpHandler,
  errors,
}) {
  return (
    <div className="p-2">
      <form className="space-y-8" onSubmit={sendOtpHandler}>
        <TextField
          label={"لطفا شماره تلفن همراه خود را وارد کنید"}
          register={register}
          type="number"
          required
          // onChange={onChange}==> we use react hook form
          // value={phoneNumber}
          name="phoneNumber"
          validationSchema={{ required: "شماره همراه خود را وارد نمایید." }}
          errors={errors}
        />
        {isPending ? (
          <Loader />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            ارسال کد تایید
          </button>
        )}
      </form>
    </div>
  );
}
