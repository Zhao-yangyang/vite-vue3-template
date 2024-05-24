<script setup lang="ts">
import { useCountStore } from '/@/stores'
const countStore = useCountStore()
// 通过计算属性
const countComputed = computed(() => countStore.count)
// 通过 storeToRefs api 结构
const { doubleCount } = storeToRefs(countStore)
</script>
<template>
  <div class="index">
    <span>当前数值{{ countComputed }}</span>
    <br />
    <span>双倍数值{{ doubleCount }}</span>
    <br />
    <el-button type="primary" size="default" @click="countStore.countAdd">
      +1
    </el-button>
    <el-button type="primary" size="default" @click="countStore.countReduce">
      -1
    </el-button>
  </div>
  <div>
    <img class="w-20" src="/@/assets/images/test1.png" alt="" />
  </div>
</template>
<style lang="scss" scoped>
/* Sotre Test */
</style>
