import http from "./httpService";

export function getOtp(data /*{"phoneNumber":"09126085623"}*/) {
  return http.post("/user/get-otp", data).then((res) => {
    return res.data.data;
  });
}
export function checkOtp(
  data /*{"phoneNumber":"09126085623","otp":"123456"}*/
) {
  //It returns a promis and because the data's structure that this request returns so we write res.data.data
  return http.post("/user/check-otp", data).then((res) => {
    return res.data.data;
  });
}
export function completeProfile(data) {
  return http.post("/user/complete-profile", data).then((res) => {
    return res.data.data;
  });
}
