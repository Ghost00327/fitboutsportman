import {createRouter, createWebHistory} from 'vue-router'
import Leaderboard from '../views/Leaderboard.vue'
import LoginView from '../views/LoginView.vue'
import TeamsView from '../views/Teams.vue'
import UsersView from '../views/UsersView.vue'
import SettingsView from '../views/SettingsView.vue'
import ChallengeSettings from '@/components/settings/ChallengeSettings.vue'
import ActivityTypes from '@/components/settings/ActivityTypes.vue'
import MyAccount from '@/components/settings/MyAccount.vue'
import Apps from '@/components/settings/apps/Apps.vue'
import {useAthleteStore} from "@/stores/athlete";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'leaderboard',
      component: Leaderboard,
    },
    {
      path: '/teams',
      name: "teams",
      component: TeamsView
    },
    {
      path: '/users',
      name: "users",
      component: UsersView
    },
    {
      path: '/settings',
      name: "settings",
      component: SettingsView,
      children: [
        {
          path: '',
          name: 'challenge-settings',
          component: ChallengeSettings
        },
        {
          path: 'activity-types',
          component: ActivityTypes
        },
        {
          path: 'account',
          component: MyAccount
        },
        {
          path: 'apps',
          component: Apps
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
  ]
})

router.beforeEach(async (to, from, next) => {
  const athlete = await useAthleteStore().fetch()

  if (to.name === 'login' && athlete.id > 0) {
    next({name: 'leaderboard'})
  }

  if (to.name !== 'login' && athlete.id == 0) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
