import { createApp } from 'vue'
import './index.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGear, faUser, faRightFromBracket, faXmark, faBars, faImage, faNoteSticky, faPaperPlane, faPhone, faVideo, faMagnifyingGlass, faBell, faUserPlus, faCommentMedical, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faGear, faUser, faRightFromBracket, faXmark, faBars, faImage, faNoteSticky, faPaperPlane, faPhone, faVideo, faMagnifyingGlass, faBell, faUserPlus, faCommentMedical, faPlus) 

const pinia = createPinia()
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(Toast)
app.use(router)
app.use(pinia)
app.mount('#app')
