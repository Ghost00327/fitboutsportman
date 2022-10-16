import { createRouter, createWebHistory } from 'vue-router'
import Leaderboard from '../views/Leaderboard.vue'
import LoginView from '../views/LoginView.vue'
import {useAthleteStore} from "@/stores/athlete";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'leaderboard',
      component: Leaderboard,
      beforeEnter: async (to, from) => {
        const athlete = await useAthleteStore().fetch()

        if (athlete.id == 0) {
          await router.push({name: "login"})
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
  ]
})

export default router
