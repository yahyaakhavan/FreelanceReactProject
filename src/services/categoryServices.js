import http from "./httpService";

export function getCategoriesAPI() {
  //console.log("hi");
  return http.get("/category/list").then((res) => {
    return res.data.data;
  });
}
