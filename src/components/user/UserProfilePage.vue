<template>
  <ProfileSummary v-if="profileSummary" :profileSummary="profileSummary"/>
  <LastActivitiesList v-if="profileSummary" :profileSummary="profileSummary"/>
  <ActivitiesPerTypeChart v-if="profileSummary" :profileSummary="profileSummary"/>
  <ActivitiesPerWeekChart v-if="profileSummary" :profileSummary="profileSummary"/>
</template>


<script setup lang="ts">
import {onMounted, ref} from 'vue'
import { useRoute } from 'vue-router'
import {AthleteProvider} from "@/providers/athleteProvider";
import type {UserProfileSummary} from "@/model";
import ProfileSummary from "@/components/user/ProfileSummary.vue";
import ActivitiesPerTypeChart from "@/components/user/ActivitiesPerTypeChart.vue";
import ActivitiesPerWeekChart from "@/components/user/ActivitiesPerWeekChart.vue";
import LastActivitiesList from "@/components/user/LastActivitiesList.vue";

const route = useRoute()
const profileSummary = ref<UserProfileSummary>()
const sidebarOpen = ref(true)

interface Props {
  athleteProvider?: AthleteProvider,
}

const props = withDefaults(defineProps<Props>(), {
  athleteProvider: () => new AthleteProvider(),
})

onMounted(async () => {
  props.athleteProvider.getSummary(route.params.id.toString()).then(v => {
    profileSummary.value = v.data
  })
})
</script>

