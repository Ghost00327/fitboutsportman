<template>
  <div class="col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
    <div class="flex flex-col h-full p-5">
      <header>
        <div class="flex items-center justify-between">
          <div v-if="data.team.emoji" class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-gray-50">
            {{ data.team.emoji }}
          </div>
          <div :class="{'-ml-10': data.team.emoji}" class="text-xl">
            {{ data.team.name }}
          </div>
          <div class="flex shrink-0 -space-x-3 -ml-px">
            <img v-for="athlete in data.athletes.slice(0, 3)" :src="athlete.profile_photo_url" class="rounded-full border-2 border-white box-content" width="28" height="28" alt="User 01" />
          </div>
        </div>
      </header>
      <div class="grow mt-2">
        <table class="table-auto w-full">
          <tr v-for="athlete in data.athletes">
            <th>
              <img class="rounded-full border-2 border-white box-content" :src="athlete.profile_photo_url" width="28" height="28" alt="User 03" />
            </th>
            <th>
              <span class="text-sm items-center">{{ athlete.firstname }}</span>
            </th>
            <th class="justify-center">
              <span class="text-sm">{{ athlete.points }} points</span>
            </th>
          </tr>
        </table>
      </div>
      <footer class="mt-5">
        <div class="flex justify-end">
          <div>
            <button @click.stop="$emit('edit')">
              <span class="text-sm font-medium text-indigo-500 hover:text-indigo-600">Edit -&gt;</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {TeamSummary} from "@/model";

const props = defineProps<{data: TeamSummary}>()
</script>