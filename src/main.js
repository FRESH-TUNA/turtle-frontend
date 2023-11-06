import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import vuetify from "./plugin/vuetify";
import { loadFonts } from "./plugin/webfontloader";

/**
 * font awesome
 */
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

/* add icons to the library */
library.add(faBookmark);

loadFonts();

const pinia = createPinia();

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(VueAwesomePaginate)
    .use(router)
    .use(vuetify)
    .use(pinia)
    .mount("#app");
