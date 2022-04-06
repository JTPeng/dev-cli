require('../../main.js')
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './app.vue'

const app = createApp(App)
// 实例化 Pinia
const pinia = createPinia()

app.use(router).use(pinia).mount('#app')
