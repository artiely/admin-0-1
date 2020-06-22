import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import './layout'
import './packages'

Vue.use(Antd)
Vue.config.productionTip = false
function event(name, arg) {
  var evt = document.createEvent('Event')
  evt.initEvent(name, true, true)
  if (name === 'myevent' && arg) {
    let { textLength, leftLength } = arg
    evt.textLength = textLength
    evt.leftLength = leftLength
  }
  return evt
}

// 注册
Vue.directive('charslimit', {
  bind: function(el, binding) {
    console.log('el', el, binding)
  },
  inserted: function() {},
  update: function(el, binding) {
    // 对input元素有效
    if (el.tagName.toLocaleUpperCase() !== 'INPUT') {
      var els = el.getElementsByTagName('input')
      if (els.length !== 1) {
        throw new Error(
          'v-mask directive requires 1 input, found ' + els.length
        )
      } else {
        el = els[0]
      }
    }

    // 监听输入事件
    // el.addEventListener('input', e => {
    el.oninput = e => {
      console.log('e', e)
      if (!e.isTrusted) return

      // 当前的值
      let value = el.value
      // if(value===e.target.value)return
      console.log('value', value)
      // 当前输入的字符长度
      let textLength = strlen(value)

      // 获取配置

      const { maxLength = 10 } = binding.value
      // 剩余字符长度
      let leftLength = parseInt((maxLength - textLength) / 2)
      if (textLength > maxLength) {
        // el.value = el.value.slice(0,maxLength)
        // 因为不知道用户输入的每个字是多少字符
        // 每次从末尾删除1个字符
        el.value = el.value.substring(0, el.value.length - 1)
        el.dispatchEvent(event('input'))
      }
      el.dispatchEvent(
        event('myevent', { textLength: strlen(el.value), leftLength })
      )
    }
    // })

    // el.removeEventListener('input')

    //
  },
  componentUpdated: function(el, binding) {
    // console.log("el456", el,binding)
  },
  unbind: function() {},
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// 计算当前输入的字节
export function strlen(str) {
  var len = 0
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i)
    // 单字节加1
    if ((c >= 0x0001 && c <= 0x007e) || (c <= 0xff9f && c >= 0xff60)) {
      len++
    } else {
      len += 2
    }
  }
  return len
}
// 计算还可输入的字节
export function maxlen(str, len = 60) {
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i)
    // 单字节加1
    if ((c >= 0x0001 && c <= 0x007e) || (c <= 0xff9f && c >= 0xff60)) {
      // ...
    } else {
      len -= 1
    }
  }
  return len
}
