import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// COMMON COMPONNENTS
import bestiaryLink from '@/components/bestiary_link.vue'
import pageLink from '@/components/page_link.vue'

// LIBRARIES
import libjs from '@/lib'

// DATAS
import player from './datas/player.js'
import bestiary from './datas/bestiary.js'

// CSS
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
library.add(faBook);
library.add(faExclamationTriangle);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
require('@/assets/css/main.scss')

const app = createApp(App)

app.use(router)
app.component('bestiaryLink', bestiaryLink)
app.component('pageLink', pageLink)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.globalProperties.$library = libjs
app.config.globalProperties.$player = player
app.config.globalProperties.$bestiary = bestiary
app.mount('#app')
