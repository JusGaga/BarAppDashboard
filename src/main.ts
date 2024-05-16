import {createApp} from 'vue'
import App from './App.vue'
import './style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createPinia} from "pinia";
import router from "./router/router.ts";

const pinia = createPinia()
const app = createApp(App)


app.use(pinia)
app.use(router)
app.mount('#app')
