import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import Planificacion from '../pages/Planificacion.vue'
import Bitacora from '../pages/Bitacora.vue'
import BancoRecursos from '../pages/BancoRecursos.vue'
import IA from '../pages/IA.vue'

const routes = [
  { path: '/', name: 'Dashboard', component: Dashboard },
  { path: '/planificacion', name: 'Planificacion', component: Planificacion },
  { path: '/bitacora', name: 'Bitacora', component: Bitacora },
  { path: '/banco', name: 'BancoRecursos', component: BancoRecursos },
  { path: '/ia', name: 'IA', component: IA }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
