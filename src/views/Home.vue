<script lang="ts" setup>
import { configSource } from '../../config/config'
console.log(configSource)
console.log(import.meta.env)
</script>

<template>
  <el-row class="h-100vh w-100%s flex justify-center items-center">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <div style="font-size: 20px">
      <!-- 由于SVG图标默认不携带任何属性 -->
      <!-- 你需要直接提供它们 -->
      <Edit class="icons" />
      <Share class="icons" />
      <Delete class="icons" />
      <Search class="icons" />
      <!-- ep:alarm-clock  改成  ep-alarm-clock -->
      <icon-ep-alarm-clock />
      <!-- logos:vue -->
      <icon-logos-vue />
    </div>
  </el-row>
</template>

<style lang="scss" scoped>
/* Home */
.icons {
  @apply w-1em h-1em mr-8px;
}
</style>
