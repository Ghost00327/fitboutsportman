<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img class="mx-auto h-12 w-auto" src="@/assets/images/logo.png" alt="Workflow">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        or
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> stay fat </a>
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div class="mt-6">
          <div class="mt-12 grid grid-cols-1">
            <div class="ml-3 inline-flex rounded-md justify-center">
              <form>
                <label for="team" class="block mb-2 text-sm font-medium text-center text-gray-900 dark:text-gray-400">Select your team</label>
                <select v-model="selectedTeam" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option v-for="team in teams" :value="team">
                    {{team.emoji}} {{team.name}}
                  </option>
                </select>
                <button @click="login" type="button"><img src="@/assets/images/strava_connect.svg"></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import {api} from "@/api";
import {Leaderboard} from "@/providers/leaderboard";
import router from "@/router";
import type {Team} from "@/model";

const teams = ref([] as Team[])
const selectedTeam = ref<null | Team>()

function login(event: Event) {
  if (selectedTeam.value != null) {
    window.location.href = import.meta.env.VITE_API_URL + "/api/public/login?team=" + selectedTeam.value?.id
  }
}

onMounted(async () => {
  new Leaderboard().get().then(resp => {
    if (resp.status == 200) {
      router.push({name: "leaderboard"})
    }
  })

  api.get("/api/public/teams").then(resp => {
    teams.value = resp.data
  })
})
</script>
