<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <!-- <a-layout-sider v-model="collapsed" :trigger="null" collapsible :width="menuWidth"> -->
    <t-sider v-model="collapsed">
      <div class="logo" />
      <t-menu-solo></t-menu-solo>
    </t-sider>
    <!-- </a-layout-sider> -->
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content>
        <t-tabhistory></t-tabhistory>
        <a-input
          v-charslimit="{
            maxLength: 30,
          }"
          v-model="val"
          ref="input"
          @dispatch="handle"
        ></a-input>
        长 {{ textLength }} {{ leftLength }}
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { layout } from './config'
export default {
  name: 't-layout1',
  data() {
    return {
      val: '',
      collapsed: false,
      textLength: '',
      leftLength: 0,
    }
  },
  computed: {
    menuWidth() {
      return layout.menuWidth
    },
  },
  watch: {
    val() {
      // this.textLength = this.$refs.input.$el.getAttribute('data-text-length')
      // console.log('123',this.$refs.input.$el.getAttribute('data-text-length'))
    },
  },
  methods: {
    handle(e) {
      // console.log("handle -> e", e.textLength)
      this.textLength = e.textLength
      this.leftLength = e.leftLength
    },
  },
}
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
