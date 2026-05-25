import strapi from "@strapi/strapi";
import {resolve} from "path";

strapi.createStrapi({ distDir: resolve(__dirname, './dist') }).start().then(() => {
    console.log("Strapi is ready");
});
