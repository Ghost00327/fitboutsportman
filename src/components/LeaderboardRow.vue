<template>
  <tr>
    <td class="p-2 whitespace-nowrap">
      <div class="flex items-center">
        <a class="block" href="#0">
          <img class="rounded-full border-2 border-white box-content" :src="data.athlete.profile_photo_url" width="28" height="28" alt="User 01" />
        </a>
        <div class="pl-3 font-medium text-gray-800">{{ fullAthleteName(data.athlete) }}</div>
      </div>
    </td>
    <td class="p-2 whitespace-nowrap">
      <div class="flex items-center">
        <div class="font-medium text-gray-800">{{ fullTeamName(data.athlete.team) }}</div>
      </div>
    </td>
    <td class="p-2 whitespace-nowrap">
      <div class="flex items-center">
        <div>{{ data.activities_count }}</div>
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
        <div class="w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr from-green-500 to-green-300 mr-1">
          <svg class="w-10 h-10 fill-current text-white" viewBox="0 0 40 40">
            <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
          </svg>
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
  return new Date(props.data.elapsed_seconds * 1000).toISOString().substring(14, 19)
}
</script>