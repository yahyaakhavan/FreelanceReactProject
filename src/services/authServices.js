import http from "./httpService";

export function getOtp(data /*{"phoneNumber":"09126085623"}*/) {
  console.log(data);
  return http.post("/user/get-otp", data).then((res) => {
    return res.data.data;
  });
}
export function checkOtp(
  data /*{"phoneNumber":"09126085623","otp":"123456"}*/
) {
  //It return user data, so we write res.data.data
  return http.post("/user/check-otp", data).then((res) => {
    return res.data.data;
  });
}
export function completeProfile(data) {
  return http.post("/user/complete-profile", data).then((res) => {
    return res.data.data;
  });
}
export function getUser() {
  return http.get("/user/profile").then((res) => {
    return res.data.data;
  });
}
export function LogoutAPI() {
  return http.post("/user/logout").then((res) => {
    return res.data.data;
  });
}

export function getUsersAPI() {
  return http.get("/admin/user/list").then((res) => {
    return res.data.data;
  });
}
