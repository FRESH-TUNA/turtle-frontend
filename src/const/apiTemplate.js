import CONFIG from "@/config";

const API_TEMPLATE = {
  INVENTORY: {
    LIST: CONFIG.INVENTORY_API_ROOT+"/inventory/sku",
  }
};

export default API_TEMPLATE;
