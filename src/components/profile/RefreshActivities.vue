<template>
  <a class="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3" @click="click">Refresh Activities</a>
</template>


<script setup lang="ts">
import {ActivityProvider} from "@/providers/activityProvider";
import {useAthleteStore} from "@/stores/athlete";

interface Props {
  activityProvider?: ActivityProvider,
}

const props = withDefaults(defineProps<Props>(), {
  activityProvider: () => new ActivityProvider(),
})

async function click() {
  const athlete = await useAthleteStore().fetch();
  props.activityProvider.refreshActivities(athlete.id).then()
}
</script>