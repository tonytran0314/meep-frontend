import { createWebHistory, createRouter } from 'vue-router'
import { api } from '@/services/axios.js'
import { authStore } from '@/stores/authentication'
import { storeToRefs } from 'pinia'

const authenticationCheck = async (authStore) => {
  const { isAuthenticated } = storeToRefs(authStore)
  if(isAuthenticated.value === null) {
    try {
      await api.get('/messages')
      isAuthenticated.value = true
    } catch (error) {
      isAuthenticated.value = false
    }
  }
}

const routes = [

  /* -------------------------------------------------------------------------- */
  /*                                 GUEST VIEW                                 */
  /* -------------------------------------------------------------------------- */
  {
    path: '/',
    component: () => import('@/views/GuestView.vue'),
    name: 'Guest'
  },



  /* -------------------------------------------------------------------------- */
  /*                                  CHAT VIEW                                 */
  /* -------------------------------------------------------------------------- */
  {
    path: '/chat/:roomId',
    component: () => import('@/views/ChatView.vue'),
    name: 'Chat',
    beforeEnter: async (to, from, next) => {
      const auth = authStore()
      await authenticationCheck(auth)

      if(auth.isAuthenticated) { next() } 
      else { next({ name: 'Login'}) }
    }
  },
  


  /* -------------------------------------------------------------------------- */
  /*                             AUTHENTICATION VIEW                            */
  /* -------------------------------------------------------------------------- */
  {
    path: '/login',
    component: () => import('@/views/AuthView.vue'),
    beforeEnter: async (to, from, next) => {
      const auth = authStore()
      await authenticationCheck(auth)

      if(!auth.isAuthenticated) { next() } 
      else { next({ name: 'Chat', params: { roomId: 3 } }) } // this is currently hard coding. try to fix it
    },
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/components/auth/LoginForm.vue'),
      }
    ],
  },
  { 
    path: '/signup', 
    component: () => import('@/views/AuthView.vue'),
    beforeEnter: async (to, from, next) => {
      const auth = authStore()
      await authenticationCheck(auth)

      if(!auth.isAuthenticated) { next() } 
      else { next({ name: 'Chat', params: { roomId: 3 } }) } // this is currently hard coding. try to fix it
    },
    children: [
      {
        path: '',
        name: 'Signup',
        component: () => import('@/components/auth/SignupForm.vue'),
      }
    ],
  },



  /* -------------------------------------------------------------------------- */
  /*                                  404 VIEW                                  */
  /* -------------------------------------------------------------------------- */
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'Not Found',
  //   component: () => import('@/components/not_found/Container.vue'),
  // },
]



const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router