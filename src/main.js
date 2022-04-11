import { createApp } from 'vue'
import App from './App.vue'
import routes from './router/routes.js'

const app = createApp(App)

app.use(routes)
app.mount('#app')
