import { createApp } from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

// Do not introduce` on-demand in local development?
// In the local development for on-demand introduction, the number of browser requests will increase by about 20%.
// Which may slow down the browser refresh.
// Therefore, all are introduced in local development, and only introduced on demand in the production environment
if (import.meta.env.DEV) {
  import('ant-design-vue/dist/antd.less');
}

createApp(App).use(store).use(router).mount('#app')
