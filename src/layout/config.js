import Vue from 'vue'

let config = {
  // 当前选择的布局
  layoutComp: 1,
  //  菜单的宽度
  menuWidth: 256,
  //  是否展示菜单trigger
  showTrigger: true,
  tabHistory: true,
}

export const layout = Vue.observable(config)
