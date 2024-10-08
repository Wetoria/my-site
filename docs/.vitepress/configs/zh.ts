import { postsSidebarWithLocale } from "../../../components/Forward/DocData";

import type { DefaultTheme, LocaleSpecificConfig } from "vitepress";

// REF https://vitepress.dev/reference/default-theme-config
export const themeConfig: DefaultTheme.Config = {
    // REF https://vitepress.dev/reference/default-theme-config#docfooter
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    outlineTitle: "目录",

    // REF https://vitepress.dev/reference/default-theme-config#lastupdatedtext
    lastUpdatedText: "更新时间",

    // REF https://vitepress.dev/reference/default-theme-config#darkmodeswitchlabel
    darkModeSwitchLabel: "深色主题",

    // REF https://vitepress.dev/reference/default-theme-config#sidebarmenulabel
    sidebarMenuLabel: "列表",

    // REF https://vitepress.dev/reference/default-theme-config#returntotoplabel
    returnToTopLabel: "回到顶部",

    // REF https://vitepress.dev/reference/default-theme-config#langmenulabel
    langMenuLabel: "切换语言",

    // nav: [
    // ],

    sidebar: {
      "/zh/articles/": [
        ...postsSidebarWithLocale.zh,
      ],
    },
};

export const localeConfig: LocaleSpecificConfig<DefaultTheme.Config> & { label: string; link?: string } = {
    label: "简体中文",
    lang: "zh", // 设置 `<html>` 标签 lang 属性
    dir: "/zh/",

    themeConfig,
};

export default {
  localeConfig,
};
