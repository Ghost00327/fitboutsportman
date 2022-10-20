<template>
  <div @click="click">
    <slot></slot>
  </div>
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