import { ApiRequester } from "@/util/apiRequester";
import API_TEMPLATE from "@/const/apiTemplate";
import UriTemplateParser from "@/util/uriTemplateParser";

const searchSku = async (page = 1, size = 2, sort = "asc", query = "") => {

    const url = UriTemplateParser.builder(API_TEMPLATE.SKU.LIST)
        .addQueryParam("page", page)
        .addQueryParam("size", size)
        .addQueryParam("sort", sort)
        .build();

    return ApiRequester.get(url);
}

const showSku = (id) => {
    const url = UriTemplateParser.builder(API_TEMPLATE.SKU.SHOW)
        .addPathParam("id", id)
        .build();

    return ApiRequester.get(url)
}


const skuIn = (id, reason="NEW", count, description="") => {
    const url = UriTemplateParser.builder(API_TEMPLATE.SKU.IN)
        .addPathParam("id", id)
        .build()

    return ApiRequester.post(url, {
        reason, count, description
    });
}

const skuInReasons = () => {
  return ApiRequester.get(API_TEMPLATE.SKU.IN_REASONS);
};

const skuOutReasons = () => {
    return ApiRequester.get(API_TEMPLATE.SKU.OUT_REASONS);
}

export { searchSku, showSku, skuIn, skuInReasons, skuOutReasons };
