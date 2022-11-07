import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar } from "./navbar";
import { enSidebar } from "./sidebar";


// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
export default hopeTheme({

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  author: {
    name: "hearbeat",
    url: "https://github.com/hearbeatl",
  },

  iconAssets: "iconfont",

  fullscreen: true,

  logo: "/slogo.png",

  repo: "https://github.com/hearbeatl",

  docsDir: "docs",


  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    // 在移动视图下访问非博客相关的页面时，你也可以在侧边栏看到它
    sidebarDisplay: "mobile",
    // 分页配置
    articlePerPage: 11,
    description: "我是心灵跳动，大学生在读，渴望成为前端工程师",

    intro: "/intro",
    // 博客个人媒体信息
    medias: {
      GitHub: "https://github.com/hearbeatl",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=2466646235&site=qq&menu=yes",
      Gitee: "https://gitee.com/hearbeatl",
      Zhihu: "https://www.zhihu.com/people/ping-fan-zhong-de-zhuo-yue",
      Gmail: "mailto:shanguan888@gmail.com",
      Weibo: "https://weibo.com/u/7716480217",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,
      footer: '<a href="https://github.com/hearbeatl">hearbeat</a>',
      displayFooter: true,

      // 是否开启在github上编辑页面
      metaLocales: {

        editLink: '编辑此页页面',
      },
    },

  },
  // 下面显示在页面上编辑情况
  editLink: false,
  lastUpdated: true,
  contributors: true,

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },


  plugins: {
    blog: {
      autoExcerpt: true,
    },
// If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageTitle: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
