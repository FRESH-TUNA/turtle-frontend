class _URITemplateBuilder {
    constructor(baseUri) {
        this.uri = baseUri;
        this.queryParams = {};
    }

    addPathParam(key, value) {
        this.uri = this.uri.replace(`{${key}}`, encodeURIComponent(value));
        return this;
    }

    addQueryParam(key, value) {
        this.queryParams[key] = encodeURIComponent(value);
        return this;
    }

    build() {
        let queryString = Object.keys(this.queryParams)
            .map(key => key + '=' + this.queryParams[key])
            .join('&');

        if (queryString) {
            this.uri += '?' + queryString;
        }

        return this.uri;
    }
}

const UriTemplateParser = {
    builder: (template) => new _URITemplateBuilder(template)
}

export default UriTemplateParser;