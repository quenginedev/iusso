import { computed, ref } from "vue";
import { LoginCredentials } from "../../types";
import { login } from "../services/auth-service";
import { AuthMeta } from "../../types";
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

  const loginUser = async (credentials: LoginCredentials) => {
    try {
      loading.value = true;
      errorMsg.value = "";

      const { data, error } = await login(credentials);
      if (error) {
        errorMsg.value = error.message;
        return;
      }
      Cookie.set("token", prop("token", data));
      Cookie.set("meta", JSON.stringify(prop("meta", data)));
      authUser.value = prop("meta", data);
      replace({ name: "discovery" });
    } finally {
      loading.value = false;
    }
  };

  const logoutUser = async () => {
		Cookie.remove('token')
		Cookie.remove('meta')
		authUser.value = null;
	};

  return {
    authUser,
    errorMsg,
    loading,

    isAuthenticated,

    loginUser,
    logoutUser,
  };
};

export default useAuth;
