import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// COMMON COMPONNENTS
import monsterLink from '@/components/bestiary_link.vue'

// LIBRARIES
import library from '@/lib'

// DATAS
import player from './datas/player.js'
import bestiary from './datas/bestiary.js'

const app = createApp(App)

app.use(router)
app.use(monsterLink)
app.config.globalProperties.$library = library
app.config.globalProperties.$player = player
app.config.globalProperties.$bestiary = bestiary
app.mount('#app')
