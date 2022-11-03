<template>
  <div class="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <img class="h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company">
        <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        <p class="mt-2 text-sm text-gray-600">
          Or
          <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">create new space</a>
        </p>
      </div>

      <div class="mt-8">

        <div>
          <div>
            <p class="text-sm font-medium text-gray-700">Choose your team</p>

            <div class="mt-2">
              <select v-model="selectedTeam" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option v-for="team in teams" :value="team">
                  {{team.emoji}} {{team.name}}
                </option>
              </select>
            </div>
          </div>

          <div class="relative mt-2">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-slate-100 px-2 text-gray-500">and sign in using one of our integration</span>
            </div>
          </div>
        </div>

        <div class="mt-1 grid grid-cols-3 gap-3 mt-2">
          <div>
            <button @click="login('strava')" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm">
              <span class="sr-only">Sign in with Strava</span>
              <IconStrava/>
            </button>
          </div>

          <div>
            <button @click="login('google')" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm">
              <span class="sr-only">Sign in with Google Fit</span>
              <IconGoogleFitSolo/>
            </button>
          </div>

          <div>
            <a @click="login('apple')" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm">
              <span class="sr-only">Sign in with Apple</span>
              <IconAppleHealth/>
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {Team} from "@/model";
import {Teams} from "@/providers/teams";
import IconStrava from "@/components/icons/IconStrava.vue";
import IconGoogleFitSolo from "@/components/icons/IconGoogleFitSolo.vue";
import IconAppleHealth from "@/components/icons/IconAppleHealth.vue";

const teams = ref([] as Team[])
const selectedTeam = ref<null | Team>()

function login(integration: string) {
  if (selectedTeam.value != null) {
    window.location.href = import.meta.env.VITE_API_URL + `/auth/${integration}?team=${selectedTeam.value?.id}`
  }
}

onMounted(async () => {
  new Teams().get().then(resp => {
    teams.value = resp.data
  })
})
</script>
