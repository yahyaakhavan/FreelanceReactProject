import http from "./httpService";

export function changeUserStatusAPI({ id, data }) {
  console.log(id, data);
  return http.patch(`/admin/user/verify/${id}`, data).then((res) => {
    return res.data.data;
  });
}
