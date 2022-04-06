import 'babel-polyfill'
import './assets/css/reset.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

const app = createApp(App)
// 实例化 Pinia
const pinia = createPinia()

app.use(router).use(pinia).mount('#app')
