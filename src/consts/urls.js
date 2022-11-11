import CONFIG from "@/turtleConfig";

const URLS = {
  MAIN_API: {
    AUTH: {
      ROOT: CONFIG.MAIN_API_ROOT + "/auth",
      SIGNIN: CONFIG.MAIN_API_ROOT + "/auth" + "/signin",
      REFRESH: CONFIG.MAIN_API_ROOT + "/auth" + "/refresh",
      SIGNUP: CONFIG.MAIN_API_ROOT + "/auth" + "/signup",
      USER: CONFIG.MAIN_API_ROOT + "/auth" + "/sign-up" + "/user",
      USERNAME_CHECK: CONFIG.MAIN_API_ROOT + "/auth" + "/sign-up" + "/username-check",
      ACADEMY: CONFIG.MAIN_API_ROOT + "/auth" + "/sign-up" + "/academy",
      TUTOR: CONFIG.MAIN_API_ROOT + "/auth" + "/sign-up" + "/tutor",
    },
    USERS: {
      ROOT: CONFIG.MAIN_API_ROOT + "/users",
      ME: {
        ROOT: CONFIG.MAIN_API_ROOT + "/users" + "/me",
        QUESTIONS: CONFIG.MAIN_API_ROOT + "/users/me/questions",
      }
    }
  },
};

export default URLS;
