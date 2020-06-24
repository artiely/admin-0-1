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
        <!-- 字符长度的限制s -->
        <p>字符长度的限制</p>
        <a-input
          v-charslimit="{
            maxLength: 30,
          }"
          v-model="val"
          ref="input"
          @dispatch="handle"
        ></a-input>
        长 {{ textLength }} {{ leftLength }}

        <input-tag v-model="tags" class="bg-blue" />

        <a-input v-model="val" v-currency></a-input>
        <!-- <button class="px-4 py-4 bg-blue-900 ad">你好</button>
        <t-button></t-button>
        <button class="bg-indigo-500 text-white py-2 text-sm px-3 rounded ">New Contact</button>
        <button class="ml-4 text-gray-600 py-2 text-sm px-3 rounded focus:outline-none border border-gray-400">New Task</button>

        <button
          x-ref="button"
          @click="onButtonClick()"
          type="button"
          aria-haspopup="listbox"
          :aria-expanded="open"
          aria-labelledby="assigned-to-label"
          class="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
        >1231</button>

        <div class="bg-gray-200 min-h-screen">
          <div class="max-w-6xl mx-auto px-8 py-16">
            <div class="relative">
              <div class="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
                <div class="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
                  <img
                    class="absolute h-full w-full object-cover"
                    src="https://stripe.com/img/v3/payments/overview/photos/slack.jpg"
                    alt=""
                  />
                  <div class="absolute inset-0 bg-indigo-900 opacity-75"></div>

                </div>
                <div class="relative lg:w-7/12 bg-white">
                  <svg
                    class="absolute h-full text-white w-24 -ml-12"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <polygon points="50,0 100,0 50,100 0,100" />
                  </svg>
                  <div class="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
                    <p>
                      As <strong class="text-gray-900 font-medium">Slack</strong> grows rapidly, using Stripe helps them scale payments easily &mdash; supporting everything from getting paid by users around the world to enabling ACH payments for corporate customers.
                    </p>
                    <p class="mt-6">
                      <a
                        href="#"
                        class="font-medium text-indigo-600 hover:text-indigo-900"
                      >Learn more about our users &rarr;</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button disabled="disabled" ></button>
        <div class="bg-gray-200 rounded-sm px-2 py-3">nihao</div> -->
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
      tags: ['123', '456'],
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
.ad {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
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
