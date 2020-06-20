<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <!-- <a-layout-sider v-model="collapsed" :trigger="null" collapsible :width="menuWidth"> -->
    <t-sider v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
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
      collapsed: false,
    }
  },
  computed: {
    menuWidth() {
      return layout.menuWidth
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
