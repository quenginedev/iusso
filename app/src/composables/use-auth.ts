import { computed, ref } from "vue";
import {
  AuthMeta,
  AuthVerificationParams,
  LoginCredentials,
  SignupCredentials,
} from "../../types";
import { login, signup, verify } from "../services/auth-service";
import Cookie from "js-cookie";
import { prop } from "ramda";
import { useRouter } from "vue-router";

const authUserStr = Cookie.get("meta");
const authUser = ref<AuthMeta | null>(authUserStr && JSON.parse(authUserStr));
const isAuthenticated = computed(() => !!authUser.value);

const useAuth = () => {
  const { replace } = useRouter();
  const errorMsg = ref("");
  const loading = ref(false);

  const setAuthSession = (data: any) => {
    Cookie.set("token", prop("token", data));
    Cookie.set("meta", JSON.stringify(prop("meta", data)));
    authUser.value = prop("meta", data);
    replace({ name: "discovery" });
  };

  const loginUser = async (credentials: LoginCredentials) => {
    try {
      loading.value = true;
      errorMsg.value = "";

      const { data, error } = await login(credentials);
      if (error) {
        errorMsg.value = error.message;
        return;
      }
      setAuthSession(data);
    } finally {
      loading.value = false;
    }
  };

  const logoutUser = async () => {
    Cookie.remove("token");
    Cookie.remove("meta");
    authUser.value = null;
  };

  const signupUser = async (credentials: SignupCredentials) => {
    try {
      loading.value = true;
      errorMsg.value = "";
      const { data, error } = await signup(credentials);
      if (error) {
        errorMsg.value = error.message;
        return;
      }
      await replace({ name: "verify-prompt", params: data });
    } finally {
      loading.value = false;
    }
  };

  const verifyUser = async (params: AuthVerificationParams) => {
    try {
      loading.value = true;
      errorMsg.value = "";
      const { data, error } = await verify(params);
      if (error) {
        errorMsg.value = error.message;
        return;
      }
      setAuthSession(data);
    } finally {
      loading.value = false;
    }
  };

  return {
    authUser,
    errorMsg,
    loading,

    isAuthenticated,

    loginUser,
    logoutUser,
    signupUser,
    verifyUser,
  };
};

export default useAuth;
