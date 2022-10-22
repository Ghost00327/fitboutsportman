<template>
  <tr>
    <td class="p-2 whitespace-nowrap">
      <div class="flex items-center">
        <a class="block" href="#0">
          <img class="rounded-full border-2 border-white box-content" :src="data.user.profile_photo_url" width="28" height="28" alt="User 01" />
        </a>
        <div class="pl-3 font-medium text-gray-800">{{ fullAthleteName(data.user) }}</div>
      </div>
    </td>
    <td class="p-2 whitespace-nowrap">
      <div class="flex items-center">
        <div class="font-medium text-gray-800">{{ fullTeamName(data.user.team) }}</div>
      </div>
    </td>
    <td class="p-2 whitespace-nowrap">
      <div class="text-center">
        {{ data.activities_count }}
      </div>
    </td>
    <td class="p-2 whitespace-nowrap">
      <div class="text-center">{{ data.points_sum }}</div>
    </td>
    <td class="p-2 whitespace-nowrap">
      <div class="text-center">{{ timeElapsed() }}</div>
    </td>
    <td class="p-2 whitespace-nowrap text-center">
      <div v-for="badge in data.badges" class="inline-flex items-center text-xs font-medium text-gray-700 bg-gray-200 rounded-full text-center py-0.5">
        <div class="w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr from-green-100 to-pink-100 mr-3">
          <div class="grid place-items-center mt-2">
            {{ badge.emoji }}
          </div>
        </div>
        <span class="px-2">{{ badge.name }}</span>
      </div>
    </td>
  </tr>
</template>


<script setup lang="ts">
import type {LeaderboardRow} from "@/model"
import {fullAthleteName, fullTeamName} from "@/utils";

const props = defineProps<{data: LeaderboardRow}>()

function timeElapsed() {
  //https://stackoverflow.com/a/1322771
  return new Date(props.data.elapsed_millis).toISOString().substring(14, 19)
}
</script>