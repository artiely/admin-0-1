<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <t-home></t-home>
      <t-setting v-if="setting"></t-setting>
    </div>
  </a-config-provider>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { setting } from '@config'
export default {
  data() {
    return {
      locale: zhCN,
      setting,
    }
  },
}
</script>
<style lang="less">
#app {
  height: 100%;
  .ant-layout {
    height: 100%;
  }
}
</style>
