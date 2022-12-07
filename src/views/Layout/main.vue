<script setup lang="ts" name="Main"></script>

<template>
  <div class="flex">
    <BaseSide />
    <div class="flex flex-col w-100%">
      <BaseHeader />
      <div class="context-box">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.context-box {
  height: calc(100vh - 64px);
}
</style>
