import CONFIG from "@/config";

const URLS = {
  MAIN_API: {
    // AUTH: {
    //   ROOT: CONFIG.MAIN_API_ROOT + "/auth",
    //   SIGNIN: CONFIG.MAIN_API_ROOT + "/auth" + "/signin",
    //   REFRESH: CONFIG.MAIN_API_ROOT + "/auth" + "/refresh",
    //   SIGNUP: CONFIG.MAIN_API_ROOT + "/auth" + "/sign-up",
    //   USER: CONFIG.MAIN_API_ROOT + "/auth" + "/sign-up" + "/user",
    //   USERNAME_CHECK: CONFIG.MAIN_API_ROOT + "/auth" + "/sign-up" + "/username-check",
    //   ACADEMY: CONFIG.MAIN_API_ROOT + "/auth" + "/sign-up" + "/academy",
    //   TUTOR: CONFIG.MAIN_API_ROOT + "/auth" + "/sign-up" + "/tutor",
    // },
    INVENTORY: {
      IN_REASONS: CONFIG.MAIN_API_ROOT + "/inventory" + "/in/reasons"
    },
  },
};

export default URLS;
