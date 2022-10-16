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
      beforeEnter: (to, from) => {
        const athlete = useAthleteStore().fetch()

        if (athlete != null && !useAthleteStore().exists()) {
          router.push({name: "login"})
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
