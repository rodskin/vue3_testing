import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import player from './datas/player.js'
import bestiary from './datas/bestiary.js'

const app = createApp(App)

app.use(router)
app.config.globalProperties.$player = player
app.config.globalProperties.$bestiary = bestiary
app.mount('#app')
