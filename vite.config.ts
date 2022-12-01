import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// icon 插件
import Icons from 'unplugin-icons/vite';
// icon 自动引入解析器
import IconsResolver from 'unplugin-icons/resolver';
// icon 加载 loader
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
// Unocss 插件
import Unocss from 'unocss/vite';
// Unocss 默认预设
import presetUno from '@unocss/preset-uno';
// Unocss 属性模式预设
import presetAttributify from '@unocss/preset-attributify';
// Unocss 指令转换插件
import transformerDirective from '@unocss/transformer-directives';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [
    vue(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: ['vue', 'pinia', 'vue-router'],
      resolvers: [ElementPlusResolver()],
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components({
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver(),
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          // icon自动引入的组件前缀 - 为了统一组件icon组件名称格式
          prefix: 'icon',
          enabledCollections: ['ep', 'logos'],
          // 自定义的icon模块集合
          customCollections: ['user', 'home'],
        }),
      ],
    }),
    Icons({
      compiler: 'vue3',
      customCollections: {
        // user图标集，给svg文件设置 fill="currentColor" 属性，使图标的颜色具有适应性
        user: FileSystemIconLoader('src/assets/svg/user', svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        ),
        // home 模块图标集
        home: FileSystemIconLoader('src/assets/svg/home', svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        ),
      },
      autoInstall: true,
    }),
    Unocss({
      // 预设
      presets: [presetUno(), presetAttributify()],
      // 指令转换插件
      transformers: [transformerDirective()],
      // 自定义规则
      rules: [],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
