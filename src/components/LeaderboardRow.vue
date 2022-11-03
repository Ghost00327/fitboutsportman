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