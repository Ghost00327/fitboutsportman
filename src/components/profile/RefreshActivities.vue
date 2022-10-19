<template>
  <a class="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3" @click="click">Refresh Activities</a>
</template>


<script setup lang="ts">
import {useAthleteStore} from "@/stores/athlete";
import {AthleteProvider} from "@/providers/athleteProvider";

interface Props {
  athleteProvider?: AthleteProvider,
}

const props = withDefaults(defineProps<Props>(), {
  athleteProvider: () => new AthleteProvider(),
})

async function click() {
  const athlete = await useAthleteStore().fetch();
  props.athleteProvider.refreshActivities(athlete.id).then()
}
</script>