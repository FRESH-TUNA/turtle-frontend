const ROUTES = {
    SKU: {
        LIST: { PATH: "/", NAME: "sku-list" },
        IN: { PATH: "/sku/:id/in", NAME: "sku-id-in" },
        NEW: { PATH: "/sku/new", NAME: "sku-new" }
    },
    ITEM: {
        LIST: { PATH: "/items", NAME: "item-list" },
        SHOW: { PATH: "/items/:id", NAME: "item-show" },
        EDIT: { PATH: "/items/:id/edit", NAME: "item-edit" },
        IN: { PATH: "/items/:id/in", NAME: "item-id-in" },
        OUT: { PATH: "/items/:id/out", NAME: "item-id-out" },
        NEW: { PATH: "/items/new", NAME: "item-new" }
    }
};

export default ROUTES;
