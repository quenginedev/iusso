import { pathOr, prop } from "ramda";
import { LoginCredentials } from "../../types";
import createService from "./create-service";

const authService = createService(import.meta.env.VITE_AUTH_SERVICE);

const login = async (credentials: LoginCredentials) => {
  try {
    const { data } = await authService.post("/login", credentials);
    return { data };
  } catch (error: any) {
    console.log(error);
    return {
      error: {
        message: pathOr(prop("message", error), ["response", "data"], error),
      },
    };
  }
};

export { login };
