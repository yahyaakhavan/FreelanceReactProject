import http from "./httpService";

export function getOwnerProjectsAPI() {
  return http.get("/project/owner-projects").then((res) => {
    return res.data.data;
  });
}

export function removeProjectAPI(id) {
  console.log(id);
  return http.delete(`/project/${id}`).then((res) => {
    console.log(res); //res.data.data=>>پروژه با موفقیت حذف شد
    return res.data.data;
  });
}

export function createProjectAPI(data) {
  return http.post("/project/add", data).then((res) => {
    return res.data.data;
  });
}

export function editProjectAPI({ id, newProject }) {
  return http.patch(`/project/update/${id}`, newProject).then((res) => {
    return res.data.data;
  });
}

export function changeProjectStatusAPI({ id, data }) {
  //==>data={status:"OPEN||CLOSE"}
  return http.patch(`/project/${id}`, data).then((res) => {
    return res.data.data;
  });
}

export function getSingleProjectAPI(id) {
  return http.get(`/project/${id}`).then((res) => {
    return res.data.data;
  });
}
export function getAllProjectsAPI() {
  return http.get("/project/list").then((res) => {
    return res.data.data;
  });
}
