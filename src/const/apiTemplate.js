import CONFIG from "@/config";

const API_TEMPLATE = {
  SKU: {
    LIST: CONFIG.INVENTORY_API_ROOT+"/skus",
    SHOW: CONFIG.INVENTORY_API_ROOT+"/skus/{id}",
    IN: CONFIG.INVENTORY_API_ROOT+"/skus/{id}/in",
    IN_REASONS: CONFIG.INVENTORY_API_ROOT+"/skus/in/reasons",
    OUT_REASONS: CONFIG.INVENTORY_API_ROOT+"/skus/out/reasons",
  },
  ITEM: {
    LIST: CONFIG.INVENTORY_API_ROOT+"/items",
    ID: CONFIG.INVENTORY_API_ROOT+"/items/{id}",
    IN: CONFIG.INVENTORY_API_ROOT+"/items/{id}/in",
    OUT: CONFIG.INVENTORY_API_ROOT+"/items/{id}/out",
    NEW: CONFIG.INVENTORY_API_ROOT+"/items"
  }
};

export default API_TEMPLATE;
