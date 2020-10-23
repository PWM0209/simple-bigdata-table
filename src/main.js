import Vue from 'vue'
import App from './App.vue'

// element UI组件库
import ElementUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'small'
})
new Vue({
  render: h => h(App),
}).$mount('#app')
