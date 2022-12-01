import { createApp } from 'vue'
import store from './stores'

import App from './App.vue'
import router from './router'
//统一公共样式管理、初始化样式
import '@/styles/normalize.css'

// 导入Unocss样式
import 'uno.css'
//element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.use(store)
app.use(router)

app.use(ElementPlus, { size: 'small', zIndex: 3000 })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
