import axios from "axios";
import { defaultTo } from "ramda";
import Cookie from "js-cookie";

export default (baseURL: string) => {
  const service = axios.create({
    baseURL,
  });

  service.interceptors.request.use((config) => {
    //@ts-ignore
    config.headers["iusso-auth-token"] = defaultTo("", Cookie.get("token"));
    return config;
  });

  return service;
};
