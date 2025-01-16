import { createWebHistory, createRouter } from 'vue-router'
import { api } from '@/services/axios.js'

const authenticationCheck = async () => {
  try {
    const res = await api.get('/is-authenticated')

    return res.data.isAuthenticated
  } catch (error) {
    console.log(error) 
  }
}

const routes = [

  /* -------------------------------------------------------------------------- */
  /*                                 GUEST VIEW                                 */
  /* -------------------------------------------------------------------------- */
  {
    path: '/',
    component: () => import('@/views/GuestView.vue'),
    name: 'Guest',
    // beforeEnter: (to, from, next) => {
    //   authenticationCheck()
    //   .then((isAuthenticated) => {
    //     if(isAuthenticated) { next({ name: 'Dashboard'}) } 
    //     else { next() }
    //   })
    // }
  },



  /* -------------------------------------------------------------------------- */
  /*                                  CHAT VIEW                                 */
  /* -------------------------------------------------------------------------- */
  {
    path: '/chat/:roomId',
    component: () => import('@/views/ChatView.vue'),
    name: 'Chat'
  },
  


  /* -------------------------------------------------------------------------- */
  /*                             AUTHENTICATION VIEW                            */
  /* -------------------------------------------------------------------------- */
  {
    path: '/login',
    component: () => import('@/views/AuthView.vue'),
    // beforeEnter: (to, from, next) => {
    //   authenticationCheck()
    //   .then((isAuthenticated) => {
    //     if(isAuthenticated) { next({ name: 'Dashboard'}) } 
    //     else { next() }
    //   })
    // },
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
    // beforeEnter: (to, from, next) => {
    //   authenticationCheck()
    //   .then((isAuthenticated) => {
    //     if(isAuthenticated) { next({ name: 'Dashboard'}) } 
    //     else { next() }
    //   })
    // },
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