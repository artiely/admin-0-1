<template>
  <a-layout-content>
    <!-- <t-tabhistory v-if="layout.tabHistory"></t-tabhistory> -->
    <router-view></router-view>
  </a-layout-content>
</template>

<script>
import { layout } from './config'
export default {
  name: 't-content',
  data() {
    return {
      layout,
    }
  },
}
</script>

<style lang="less" scoped></style>
