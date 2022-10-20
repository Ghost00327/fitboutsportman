<template>
  <div class="col-span-full bg-white shadow-lg rounded-sm border border-gray-200">
    <header class="px-5 py-4 border-b border-gray-100">
      <h2 class="font-semibold text-gray-800">Leaderboard</h2>
    </header>
    <div class="p-3">

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <!-- Table header -->
          <thead class="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm">
          <tr>
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-left">User</div>
            </th>
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-left">Team</div>
            </th>
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-center">Total activities</div>
            </th>
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-center">Total points</div>
            </th>
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-center">Time logged</div>
            </th>
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-center">Badges</div>
            </th>
          </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm divide-y divide-gray-100">
            <LeaderboardRowComponent v-for="row in rows" :data="row" />
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>


<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {LeaderboardRow} from "@/model"
import LeaderboardRowComponent from "@/components/LeaderboardRow.vue"
import {Leaderboard} from "@/providers/leaderboard";

const rows = ref([] as LeaderboardRow[])

onMounted(async () => {
  new Leaderboard().get().then(value => {
    rows.value = value.data
  })
})
</script>