<script setup lang="ts" name="BaseHeader">
import { toggleDark, isDark } from '/@/composables'
import { useLayoutStore } from '/@/stores'

const layoutSotre = useLayoutStore()
const { isCollapse } = storeToRefs(layoutSotre)
const clickCollapse = () => {
  layoutSotre.handleCollapse()
}
</script>

<template>
  <el-menu class="BaseHeader-menu h-64px" mode="horizontal" :ellipsis="false">
    <div class="flex items-center">
      <div
        class="ml-20px flex items-center"
        style="height: var(--el-menu-item-height)"
        @click="clickCollapse()"
      >
        <icon-ep-expand v-if="isCollapse" />
        <icon-ep-fold v-else />
      </div>
      <el-breadcrumb separator="/" class="ml-12px">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ name: 'test' }">Test</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="flex-grow" />
    <el-menu-item index="3">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--el-menu-item-height)"
        @click="toggleDark()"
      >
        <icon-ep-moon v-if="isDark" />
        <icon-ep-sunny v-else />
        <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
      </button>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped></style>
