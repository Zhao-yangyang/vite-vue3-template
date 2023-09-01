<script setup lang="ts" name="BaseSide">
import { useLayoutStore } from '/@/stores'

const layoutSotre = useLayoutStore()
const router = useRouter()
const baseSide: any = router.options.routes.filter(r => r.name === 'layout')
console.log(baseSide, 'baseSide')

const { isCollapse } = storeToRefs(layoutSotre)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    default-active="2"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1" class="mb-12px el-menu-first-child">
      <icon-logos-dribbble-icon class="text-32px mr-10px" />
      <template #title>Test系统</template>
    </el-menu-item>
    <el-menu-item index="2" v-for="el of baseSide[0].children" :key="el.name">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ el.meta.title }}</span>
      </template>
    </el-menu-item>
    <!--  <el-sub-menu index="2" v-for="el of baseSide[0].children" :key="el.name">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ el.meta.title }}</span>
      </template>
       <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item two</el-menu-item>
      <el-menu-item index="1-3">item three</el-menu-item>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  &-item {
    height: 44px;
    width: 200px;

    &:hover {
      background-color: #f6f6fb;
    }

    &.is-active {
      background-color: #f6f6fb;
      position: relative;
    }

    &.is-active::after {
      content: '';
      width: 3px;
      height: 28px;
      background: #338afe;
      border-radius: 2px 0 0 2px;
      position: absolute;
      right: 0;
    }
  }

  &-first-child {
    height: 64px;
  }
}
</style>
<style lang="scss">
// submenu样式设置
.el-sub-menu {
  &__title {
    height: 44px;

    &:hover {
      background-color: #f6f6fb;
    }
  }
}
</style>
