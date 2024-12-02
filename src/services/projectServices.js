import http from "./httpService";

export function getOwnerProjectsAPI() {
  return http.get("/project/owner-projects").then((res) => {
    return res.data.data;
  });
}
