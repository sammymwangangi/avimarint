import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faCartPlus as freeFasFaCartPlus,
  faShoppingCart as freeFasFaShoppingCart,
  faHeart as freeFasFaHeart,
  faAngleDown as freeFasFaAngleDown,
  faAngleRight as freeFasFaAngleRight,
  faSignInAlt as freeFasFaSignInAlt,
  faSignOutAlt as freeFasFaSignOutAlt,
  faPen as freeFasFaPen,
  faTimes as freeFasFaTimes,
  faPhoneAlt as freeFasFaPhoneAlt,
  faStar as freeFasFaStar,
  faShareAlt as freeFasFaShareAlt,
  faFilter as freeFasFaFilter,
  faPlus as freeFasFaPlus,
  faMinus as freeFasFaMinus,
  faArrowLeft as freeFasFaArrowLeft,
  faArrowRight as freeFasFaArrowRight,
  faTachometerAlt as freeFasFaTachometerAlt,
  faList as freeFasFaList
} from '@fortawesome/free-solid-svg-icons'

import {
  faHeart as freeFarFaHeart,
  faUser as freeFarFaUser,
  faStar as freeFarFaStar
} from '@fortawesome/free-regular-svg-icons'

import {
  faFacebook as freeFabFaFacebook,
  faTwitter as freeFabFaTwitter,
  faInstagram as freeFabFaInstagram,
  faYoutube as freeFabFaYoutube,
  faWhatsapp as freeFabFaWhatsapp,
  faBlogger as freeFabFaBlogger
} from '@fortawesome/free-brands-svg-icons'

library.add(
  freeFasFaCartPlus,
  freeFasFaShoppingCart,
  freeFasFaHeart,
  freeFasFaAngleDown,
  freeFasFaAngleRight,
  freeFasFaSignInAlt,
  freeFasFaSignOutAlt,
  freeFasFaPen,
  freeFasFaTimes,
  freeFasFaPhoneAlt,
  freeFasFaStar,
  freeFasFaShareAlt,
  freeFasFaFilter,
  freeFasFaPlus,
  freeFasFaMinus,
  freeFasFaArrowLeft,
  freeFasFaArrowRight,
  freeFasFaTachometerAlt,
  freeFasFaList,
  freeFarFaHeart,
  freeFarFaUser,
  freeFarFaStar,
  freeFabFaFacebook,
  freeFabFaTwitter,
  freeFabFaInstagram,
  freeFabFaYoutube,
  freeFabFaWhatsapp,
  freeFabFaBlogger
)

config.autoAddCss = false

Vue.component('fa', FontAwesomeIcon)
Vue.component('faLayers', FontAwesomeLayers)
Vue.component('faLayersText', FontAwesomeLayersText)
