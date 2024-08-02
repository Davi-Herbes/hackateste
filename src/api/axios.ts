import defaultAxios from "axios";

export const axios = defaultAxios.create({
  baseURL: "/api",
  withCredentials: true,
});
