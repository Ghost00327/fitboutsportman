<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
    <header className="px-5 py-4 border-b border-slate-100 flex items-center">
      <h2 className="font-semibold text-slate-800">Activities by type</h2>
    </header>
    <PieChart
        chart-id="activities-per-week"
        dataset-id-key="activities-per-week"
        :labels="Object.keys(profileSummary.activities_by_type)"
        :data="Object.values(profileSummary.activities_by_type)"
    />
  </div>
</template>

<script setup lang="ts">
import PieChart from "@/partials/PieChart.vue";
import type {UserProfileSummary} from "@/model";

const props = defineProps<{profileSummary: UserProfileSummary}>()
</script>