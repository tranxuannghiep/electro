import axios from "axios";
import { setLoading } from "../redux/action/loadingAction";
import store from "../redux/store";

const axiosInstance = axios.create({
  baseURL: "https://hidden-fjord-17428.herokuapp.com/api/v1",
});

let pending = 0;
let timeoutId = null;

axiosInstance.interceptors.request.use(async (config) => {
  pending++;
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  store.dispatch(setLoading(true));
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    pending--;
    if (pending === 0) {
      timeoutId = setTimeout(() => {
        store.dispatch(setLoading(false));
      }, 500);
    }

    return response;
  },
  (error) => {
    pending--;
    if (pending === 0) {
      timeoutId = setTimeout(() => {
        store.dispatch(setLoading(false));
      }, 500);
    }
    console.log(error);
  }
);

export default axiosInstance;
