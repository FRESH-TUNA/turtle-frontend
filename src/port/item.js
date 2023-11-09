import { ApiRequester } from "@/util/apiRequester";
import API_TEMPLATE from "@/const/apiTemplate";
import UriTemplateParser from "@/util/uriTemplateParser";

const searchItem = async (page = 0, size = 2, sort = "asc", query = "") => {

    const url = UriTemplateParser.builder(API_TEMPLATE.ITEM.LIST)
        .addQueryParam("page", page)
        .addQueryParam("size", size)
        .addQueryParam("sort", sort)
        .addQueryParam("query", query)
        .build();

    return ApiRequester.get(url);
}

const showItem = (id) => {

    const url = UriTemplateParser.builder(API_TEMPLATE.ITEM.ID)
        .addPathParam("id", id)
        .build();

    return ApiRequester.get(url);
}


const itemIn = (id, reason="NEW", count, description="") => {
    const url = UriTemplateParser.builder(API_TEMPLATE.ITEM.IN)
        .addPathParam("id", id)
        .build();

    return ApiRequester.post(url, {
        reason, count, description
    });
};

const itemOut = (id, reason="SHIPPED", count, description="") => {
    const url = UriTemplateParser.builder(API_TEMPLATE.ITEM.OUT)
        .addPathParam("id", id)
        .build();

    return ApiRequester.post(url, {
        reason, count, description
    });
};

const newItem = (itemRequest) => {
    return ApiRequester.post(API_TEMPLATE.ITEM.NEW, itemRequest)
}

const updateItem = (itemRequest, id) => {

    const url = UriTemplateParser.builder(API_TEMPLATE.ITEM.ID)
        .addPathParam("id", id)
        .build();

    return ApiRequester.put(url, itemRequest)
};

const deleteItem = (id) => {
    const url = UriTemplateParser.builder(API_TEMPLATE.ITEM.ID)
        .addPathParam("id", id)
        .build();

    return ApiRequester.delete(url);
};

export { searchItem, showItem, itemIn, itemOut, newItem, updateItem, deleteItem };
