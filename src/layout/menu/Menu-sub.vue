<template functional>
  <a-sub-menu :key="props.menuInfo.path">
    <span slot="title">
      <!-- <a-iconfont :type="props.menuInfo.meta.icon" /> -->
      <t-icon
        symbol
        class="menu-icon"
        :name="props.menuInfo.meta.icon"
      ></t-icon>
      <span v-if="!isCollapse">{{
        props.menuInfo.meta.title || props.menuInfo.name
      }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <template v-if="!item.meta.hide">
        <a-menu-item v-if="!item.children" :key="item.path">
          <t-icon symbol class="menu-icon" :name="item.meta.icon"></t-icon>
          <span v-if="!isCollapse">{{ item.meta.title || item.name }}</span>
        </a-menu-item>
        <t-menu-sub v-else :key="item.path" :menu-info="item" />
      </template>
    </template>
  </a-sub-menu>
</template>
<script>
import { layout } from '../config'
export default {
  name: 't-menu-sub',
  props: {
    menuInfo: {
      type: Object,
      default: () => {},
    },
    // isCollapse: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  computed: {
    isCollapse() {
      alert(1)
      return layout.isCollapse
    },
  },
  // watch: {
  //   isCollapse() {
  //     alert(1)
  //   },
  // },
}
</script>
