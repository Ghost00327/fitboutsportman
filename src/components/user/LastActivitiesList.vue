<template>
  <div class="col-span-full bg-white shadow-lg rounded-sm border border-slate-200">
    <header class="px-5 py-4 border-b border-slate-100">
      <h2 v-if="profileSummary.last_activities.length === 0"
          class="font-semibold text-slate-800">{{ profileSummary.user.firstname }} is yet to become fitbout's star ✨</h2>
      <h2 v-if="profileSummary.last_activities.length > 0"
          class="font-semibold text-slate-800">Last {{ profileSummary.last_activities.length }} activities</h2>
    </header>
    <div class="p-3">

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full">
          <!-- Table header -->
          <thead class="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
          <tr>
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-center">Source & Name</div>
            </th>
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-center">Fitpoints & Formula</div>
            </th>
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-center">Type</div>
            </th>
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-center">Calories expended</div>
            </th>
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-center">Distance (km)</div>
            </th>
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-center">Duration</div>
            </th>
            <th class="p-2 whitespace-nowrap">
              <div class="font-semibold text-center">Finished on</div>
            </th>
          </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm font-medium divide-y divide-slate-100">
          <!-- Row -->
          <tr v-for="activity in profileSummary.last_activities">
            <td class="p-2 whitespace-nowrap md:w-1/5">
              <div class="flex items-center">
                <IconStrava v-if="activity.source === 'strava'"/>
                <IconGoogleFitSolo v-if="activity.source === 'google_fit'"/>
                <div class="pl-3">
                  <div class="group cursor-pointer relative">
                    <div class="text-slate-800 uppercase truncate w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-48 relative">{{ activity.name }}</div>
                    <div v-if="isTooltip(activity.name)" class="opacity-0 group-hover:opacity-90 w-auto bg-gray-700 text-white text-center text-xs rounded-lg py-2 absolute z-10 bottom-full -left-1/2 ml-14 px-3">
                      {{ activity.name }}
                      <svg class="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xml:space="preserve"><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
                    </div>
                  </div>
                  <a v-if="activity.external_link" :href="activity.external_link" target="_blank">
                    <div class="flex">
                      <div class="text-xs text-slate-400">Original activity</div>
                      🔗
                    </div>
                  </a>
                </div>
              </div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="text-center flex-nowrap">
                <div class="text-emerald-500">{{ activity.points }} / {{ activity.formula }}</div>
              </div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="text-center">{{ activity.type }}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="text-center">{{ activity.calories_expended }}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="text-center"> {{activity.distance_meters / 1000}}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="text-center">{{ moment(activity.duration_millis).format("h[h] mm [m]") }}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
              <div class="text-center">{{ moment(activity.end_time_millis).format("DD/MM/YYYY hh:mm:ss") }}</div>
            </td>
          </tr>
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import type {UserProfileSummary} from "@/model";
import IconStrava from "@/components/icons/IconStrava.vue";
import moment from "moment";
import IconGoogleFitSolo from "@/components/icons/IconGoogleFitSolo.vue";

const props = defineProps<{profileSummary: UserProfileSummary}>()
const isTooltip = (name:string) => name.length > 15
</script>