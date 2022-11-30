module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recommended-vue"],
  overrides: [
    // 若项目中存在scss文件，添加以下配置
    {
      files: ["*.scss", "**/*.scss"],
      customSyntax: "postcss-scss",
      extends: ["stylelint-config-recommended-scss"],
    },
  ],
  rules: {
    "declaration-block-trailing-semicolon": null,
    "font-family-no-duplicate-names": [
      true,
      {
        ignoreFontFamilyNames: ["monospace"],
      },
    ],
  },
};
