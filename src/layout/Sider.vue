<template>
  <!-- :trigger="null" -->
  <a-layout-sider
    :collapsed="value"
    @collapse="collapse"
    :trigger="trigger"
    :width="menuWidth"
    collapsible
  >
    <slot />
  </a-layout-sider>
</template>

<script>
import { layout } from './config'
export default {
  name: 't-sider',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      collapsed: false,
    }
  },
  computed: {
    trigger() {
      return layout.showTrigger ? '' : null
    },
    menuWidth() {
      return layout.menuWidth
    },
  },
  methods: {
    collapse(collapsed) {
      this.$emit('input', collapsed)
    },
  },
}
</script>

<style lang="less" scoped></style>
