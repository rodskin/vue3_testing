import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// COMMON COMPONNENTS
import bestiaryLink from '@/components/bestiary_link.vue'
import pageLink from '@/components/page_link.vue'

// LIBRARIES
import library from '@/lib'

// DATAS
import player from './datas/player.js'
import bestiary from './datas/bestiary.js'

const app = createApp(App)

app.use(router)
app.component('bestiaryLink', bestiaryLink)
app.component('pageLink', pageLink)
app.config.globalProperties.$library = library
app.config.globalProperties.$player = player
app.config.globalProperties.$bestiary = bestiary
app.mount('#app')
