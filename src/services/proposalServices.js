import http from "./httpService";
export function changeProposalStatusAPI({ id, data }) {
  return http.patch(`/proposal/${id}`, data).then((res) => {
    return res.data.data;
  });
}
export function getProposalsAPI() {
  return http.get("/proposal/list").then((res) => {
    return res.data.data;
  });
}
export function addProposalAPI(data) {
  return http.post("/proposal/add", data).then((res) => {
    return res.data.data;
  });
}
