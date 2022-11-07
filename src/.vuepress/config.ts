import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      description: "A crazy front-end programmer",
    },

  },

  theme,

  shouldPrefetch: false,
});
