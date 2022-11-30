import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {
  ElementPlusResolver,
  ArcoResolver,
  VueUseComponentsResolver,
  VueUseDirectiveResolver,
} from "unplugin-vue-components/resolvers";
// icon 插件
import Icons from "unplugin-icons/vite";
// icon 自动引入解析器
import IconsResolver from "unplugin-icons/resolver";
// icon 加载 loader
import { FileSystemIconLoader } from "unplugin-icons/loaders";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: ["vue", "pinia", "vue-router"],
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        // IconsResolver({
        //   prefix: "icon",
        // }),
        ArcoResolver(),
      ],
    }),
    Components({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver(),
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          // icon自动引入的组件前缀 - 为了统一组件icon组件名称格式
          prefix: "icon",
          enabledCollections: ["ep", "logos"],
          // 自定义的icon模块集合
          customCollections: ["user", "home"],
        }),
      ],
    }),
    Icons({
      compiler: "vue3",
      customCollections: {
        // user图标集，给svg文件设置 fill="currentColor" 属性，使图标的颜色具有适应性
        user: FileSystemIconLoader("src/assets/svg/user", svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        ),
        // home 模块图标集
        home: FileSystemIconLoader("src/assets/svg/home", svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        ),
      },
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
