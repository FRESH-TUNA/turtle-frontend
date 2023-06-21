/**
 * This file contains configurations
 */

const CONFIG = {
  /**
   * API handling
   */
  API_TIMEOUT: 5000,
  INVENTORY_API_ROOT: import.meta.env.VITE_APP_MAIN_API_ROOT,
  /**
   * Auth token prefix
   */
  MAIN_API_TOKEN_PREFIX: "Bearer",
};

export default CONFIG;
