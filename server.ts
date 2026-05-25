import strapi from "@strapi/strapi";
import {resolve} from "path";

// When compiled, __dirname is already `dist/`, so distDir = __dirname
strapi.createStrapi({ distDir: resolve(__dirname) }).start().then(() => {
    console.log("Strapi is ready");
});
