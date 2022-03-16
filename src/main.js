import { createApp } from 'vue'
import App from './App.vue'
import CoreuiVue from "@coreui/vue";
import routes from './router/routes.js'

const app = createApp(App)
app.use(CoreuiVue)
app.use(routes)
app.mount('#app')
