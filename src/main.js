import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import installElementPlus from './plugins/element'
import installAxios from './plugins/axios'
import installVueRouter from './plugins/vue-router'


const app = createApp(App)
// 使用路由
installVueRouter(app)

// 使用element UI
installElementPlus(app)

// 把axios挂载到vue实例上,在组件中直接使用this.axios
installAxios(app)

// 挂载应用到页面
app.mount('#app')