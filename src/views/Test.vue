<script lang="ts" setup>
import { configSource } from '../../config/config'
import { nanoid } from 'nanoid'
// import { ref } from 'vue'
import type { Ref } from 'vue'
let id: Ref<string | number> = ref('')

console.log(configSource)
console.log(import.meta.env)
async function createUser() {
  id.value = await nanoid()
  console.log(id.value)
}
createUser()
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
      <Edit class="w-14px h-14px mr-8px" />
      <Share class="w-14px h-14px mr-8px" />
      <Delete class="w-14px h-14px mr-8px" />
      <Search class="w-14px h-14px mr-8px" />
      <!-- ep:alarm-clock  改成  ep-alarm-clock -->
      <icon-ep-alarm-clock />
      <!-- logos:vue -->
      <icon-logos-vue />
    </div>
  </el-row>
</template>

<style lang="scss" scoped>
/* Test */
</style>
