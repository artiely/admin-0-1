<template>
  <div class="artiely-menu select-none">
    <!-- <v-logo v-if="logo" /> -->
    <!-- :selectedKeys="selectedKeys" -->
    <a-menu
      :mode="mode"
      :selectedKeys="selectedKeys"
      :theme="'dark'"
      :openKeys="openKeys"
      @openChange="onOpenChange"
      @select="select"
    >
      <template v-for="item in menu">
        <template>
          <a-menu-item
            v-if="!item.children && item.meta && !item.meta.hide"
            :key="item.path"
          >
            <template v-if="item.meta && item.meta.icon">
              <t-icon symbol class="menu-icon" :name="item.meta.icon"></t-icon>
            </template>
            {{ item.meta.title || item.name }}
          </a-menu-item>
          <t-menu-sub
            v-else
            :isCollapse="isCollapse"
            :menu-info="item"
            :key="item.path"
          />
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { layout } from '../config'
import { routes } from '@/router'
console.log('routes', routes)
let reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?/
export default {
  name: 't-menu-solo',
  props: {
    mode: {
      type: String,
      default: 'inline',
    },
    logo: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      // layout,
      collapsed: false,
      menu: Object.freeze(routes),
      openKeys: [],
    }
  },

  computed: {
    isCollapse() {
      return layout.isCollapse
    },
    selectedKeys() {
      return [this.$route.path]
    },
  },
  watch: {
    layout() {
      alert(1)
    },
  },
  methods: {
    select({ item, key, selectedKeys }) {
      let bool = reg.test(key)
      if (bool) {
        window.open(key, '_blank')
      } else {
        this.$router.push(key)
      }
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      )
      const findIndex = el => {
        return el.path === latestOpenKey
      }
      let index = this.menu.findIndex(findIndex)
      if (index === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
  },
  deactivated() {
    clearTimeout(this.timer)
  },
}
</script>

<style lang="less">
.artiely-menu {
  .ant-menu-item .anticon,
  .ant-menu-submenu-title .anticon {
    opacity: 0.8;
  }
}
.ant-menu-inline-collapsed > .ant-menu-item,
.ant-menu-inline-collapsed
  > .ant-menu-item-group
  > .ant-menu-item-group-list
  > .ant-menu-item,
.ant-menu-inline-collapsed
  > .ant-menu-item-group
  > .ant-menu-item-group-list
  > .ant-menu-submenu
  > .ant-menu-submenu-title,
.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
  padding: 0 1rem !important;
}
.menu-icon {
  margin: 0 10px;
}
</style>
