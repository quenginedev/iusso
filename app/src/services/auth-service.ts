import { pathOr, prop } from "ramda";
import { AuthVerificationParams, LoginCredentials, SignupCredentials } from "../../types";
import createService from "./create-service";

const authService = createService(import.meta.env.VITE_AUTH_SERVICE);

const login = async (credentials: LoginCredentials) => {
  try {
    const { data } = await authService.post("/login", credentials);
    return { data };
  } catch (error: any) {
    return {
      error: {
        message: pathOr(prop("message", error), ["response", "data"], error),
      },
    };
  }
};

const signup = async (credentials: SignupCredentials) => {
  try {
    const { data } = await authService.post("/signup", credentials);
    return { data };
  } catch (error: any) {
    return {
      error: {
        message: pathOr(prop("message", error), ["response", "data"], error),
      },
    };
  }
};

const verify = async (params: AuthVerificationParams) => {
  try {
    const { data } = await authService.post("/verify", params);
    return { data };
  } catch (error: any) {
    return {
      error: {
        message: pathOr(prop("message", error), ["response", "data"], error),
      },
    };
  }
};

export { login, signup, verify };
