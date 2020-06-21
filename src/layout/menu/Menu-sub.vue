<template functional>
  <a-sub-menu :key="props.menuInfo.path">
    <span slot="title">
      <!-- <a-iconfont :type="props.menuInfo.meta.icon" /> -->
      <t-icon
        symbol
        class="menu-icon"
        :name="props.menuInfo.meta.icon"
      ></t-icon>
      <span>{{ props.menuInfo.meta.title }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <template v-if="!item.meta.hide">
        <a-menu-item v-if="!item.children" :key="item.path">
          <t-icon symbol class="menu-icon" :name="item.meta.icon"></t-icon>
          <span v-if="!isCollapse">{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.path" :menu-info="item" />
      </template>
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  name: 't-menu-sub',
  props: {
    menuInfo: {
      type: Object,
      default: () => {},
    },
    isCollapse: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
