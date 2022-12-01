# 在 VScode 中安装`Vue Language Features (Volar)、TypeScript Vue Plugin (Volar)`、`ESLint`、`Stylelint`和`Prettier - Code formatter`插件

已经加入项目插件推荐，用 vscode 打开项目后会有相应的插件推荐提醒

# 不要删除 .vscode 目录 里面有项目配置

# 构建工具推荐 `pnpm`

# 初次运行

1、`pnpm i` 2、`pnpm prepare` 3、`pnpm dev` 4、`pnpm lint:all`格式化

# 打包

`pnpm build`

# 项目搭建整理

**对于新项目的整体技术调研整理**

### 前端工程化框架

**vue3** 支持 v3 的组合式 api 也兼容`vue2`的选项式 api 以及几乎所有的的语法，可
以让大家更好的过渡到新项目开发

### 工程化构建工具

**vite** 下一代的前端工具链，编译速度更快打包体积更小，原生支持 ts 编译不需再另
外编译等等。

### vue 框架配套工具

1. 路由`vue-router`
2. Vue 状态管理库 `pinia(vuex5)`
3. api 请求`axios`
4. css 预编译工具 `scss `
5. ui 组件库，`Element Plus`
6. js 语法，`typescript`
7. css 框架，`unocss`
8. icon 图标库 icones

### icon 图标使用规范

打开 icones 官网 https://icones.js.org/ 找到想用的图标集合

例如： `ic:baseline-add` 在 vite.config.ts 中 enabledCollections 中添加上对应
icon 集合前缀

```
...
IconsResolver({
  ...
  enabledCollections: ["ep", "logos","ic"],
  ...
}),
...
```

ic:baseline-add--> 改为 --> ic-baseline-add 再在前面加上 icon 前缀
-->icon-ic-baseline-add 然后直接在代码中写为`<icon-ic-baseline-add />`即可。

### 开发规范及优化

#### 代码规范

1. eslint
2. prettier
3. stylelint

#### git 提交规范

- husky+commitlint 规范 git 提交 **避免后继维护代码、版本回滚等问题时，找不到哪
  是哪**

> 提交规范

```
* feat：新功能、新特性；
* fix: 修改 bug；
* perf：更改代码，以提高性能；
* refactor：代码重构（重构，在不影响代码内部行为、功能下的代码修改）；
* docs：文档修改；
* style：代码格式修改, 注意不是 css 修改（例如分号修改）；
* test：测试用例新增、修改；
* build：影响项目构建或依赖项修改；
* revert：恢复上一次提交；
* ci：持续集成相关文件修改；
* chore：其他修改（不在上述类型中的修改）；
* release：发布新版本；
* workflow：工作流相关文件修改。
```
