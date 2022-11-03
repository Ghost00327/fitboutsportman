<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-8 bg-white shadow-lg rounded-sm border border-slate-200">
    <header className="px-5 py-4 border-b border-slate-100 flex items-center">
      <h2 className="font-semibold text-slate-800">Activities by week</h2>
    </header>
    <BarChart
        chart-id="activities-per-week"
        dataset-id-key="activities-per-week"
        :labels="Object.keys(profileSummary.activities_by_week)"
        :data="Object.values(profileSummary.activities_by_week)"
    />
  </div>
</template>

<script setup lang="ts">
import type {UserProfileSummary} from "@/model";
import BarChart from "@/partials/BarChart.vue";

const props = defineProps<{profileSummary: UserProfileSummary}>()
</script>