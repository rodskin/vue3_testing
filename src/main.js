import { createApp } from 'vue'
import App from './App'
import router from './router'

// COMMON COMPONNENTS
import playerName from '@/components/player_name'
import bestiaryLink from '@/components/bestiary_link'
import pageLink from '@/components/page_link'

// LIBRARIES
import libjs from '@/lib'

// DATAS
import player from './datas/player.js'
import bestiary from './datas/bestiary.js'

// CSS
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
require('@/assets/scss/_root.scss')


// FONT AWECOME ICONS
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBook } from "@fortawesome/free-solid-svg-icons";
library.add(faBook);
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
library.add(faExclamationTriangle);
import { faUndoAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faUndoAlt);


// APP
const app = createApp(App)

app.use(router)
app.component('bestiaryLink', bestiaryLink)
app.component('pageLink', pageLink)
app.component('playerName', playerName)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.globalProperties.$library = libjs
app.config.globalProperties.$player = player
app.config.globalProperties.$bestiary = bestiary
app.mount('#app')
