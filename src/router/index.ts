import { createRouter, createWebHashHistory } from 'vue-router'
import About from '@/components/About.vue'
import Address from '@/components/Address.vue'
import Contact from '@/components/Contact.vue'
import Skills from '@/components/Skills.vue'

const routes = [
  { path: '/', name: 'About', component: About },
  { path: '/address', name: 'Address', component: Address },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/skills', name: 'Skills', component: Skills },
]

const router = createRouter({
  history: createWebHashHistory(), // <--- HASH HISTORY funciona direto no GitHub Pages
  routes
})

export default router
