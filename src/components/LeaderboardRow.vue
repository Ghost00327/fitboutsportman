<template>
  <tr>
    <td class="p-2 whitespace-nowrap">
      <div class="flex items-center">
        <router-link :to="{ name: 'user', params: { id: data.user.id.toString() }}" class="block">
          <img class="rounded-full border-2 border-white box-content" :src="data.user.profile_photo_url" width="28" height="28" alt="User 01" />
        </router-link>
        <div class="pl-3 font-medium text-gray-800">{{ fullAthleteName(data.user) }}</div>
      </div>
    </td>
    <td class="p-2 whitespace-nowrap">
      <div class="flex items-center">
        <div v-if="data.user.team" class="font-medium text-gray-800">{{ fullTeamName(data.user.team) }}</div>
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
      <div class="text-center">{{ format(data.elapsed_millis) }}</div>
    </td>
    <td class="p-2 whitespace-nowrap text-center">
      <div class="flex gap-2 justify-center">
        <div v-for="(badge, i) in data.badges" class="relative p-2 text-xs font-medium text-white bg-gradient-to-tr from-sky-400 to-indigo-500 rounded-full text-center py-0.5" :key="i">
        <span class="px-2">{{ badge.name }}</span>
         <div class="absolute -right-2 bottom-3 w-6 h-6 flex rounded-full shrink-0 bg-gradient-to-tr from-rose-400 to-red-300">
          <div class="m-auto place-items-center">
            {{ badge.emoji }}
          </div>
        </div>
      </div>
      </div>
       
    </td>
  </tr>
</template>


<script setup lang="ts">
import type {LeaderboardRow} from "@/model"
import {fullAthleteName, fullTeamName} from "@/utils";
import moment from "moment";

const props = defineProps<{data: LeaderboardRow}>()

function format(duration: number) {
  //one week
  if (duration > 604800000) {
    return moment(duration).format("d[d] h[h]")
  }

  return moment(duration).format("h[h] mm[m]")
}
</script>