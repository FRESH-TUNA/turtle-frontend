import CONFIG from "@/config";

const API_TEMPLATE = {
  SKU: {
    LIST: CONFIG.INVENTORY_API_ROOT+"/inventory/sku",
    SHOW: CONFIG.INVENTORY_API_ROOT+"/inventory/sku/{id}",
    IN: CONFIG.INVENTORY_API_ROOT+"/inventory/sku/{id}/in",
    IN_REASONS: CONFIG.INVENTORY_API_ROOT+"/inventory/in/reasons",
  }
};

export default API_TEMPLATE;
