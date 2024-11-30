/* eslint-disable react/prop-types */
import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";
export default function SendOTPForm({
  phoneNumber,
  onChange,
  isPending,
  sendOtpHandler,
}) {
  return (
    <div className="p-2">
      <form className="space-y-8" onSubmit={sendOtpHandler}>
        <TextField
          label={"لطفا شماره تلفن همراه خود را وارد کنید"}
          onChange={onChange}
          value={phoneNumber}
          name={"PhoneNumber"}
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
