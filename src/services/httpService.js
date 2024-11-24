import axios from "axios";
const BASE_URL = "http://localhost:5000/api";
const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};
app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);
app.interceptors.response.use(
  //.use() gets two callback function onFulfilled and onRejected
  (res) => res, //onFulfilled only return the result
  async (err) => {
    //but onRejected do the instructions below
    // console.log(err.config);
    const orginalConfig = err.config;
    if (err.response.status === 401 && !orginalConfig._retry) {
      orginalConfig._retry = true; //we set it true so we do not have loop
      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });
        if (data) {
          return app(orginalConfig); //orginalConfig has all data about current request so if the data is true
          // it means we have new access and refresh token so again run the request
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);
export default http;
