<template>
  <div class="flex flex-col col-span-full bg-white shadow-lg rounded-sm border border-slate-200">
    <div class="px-5 py-6">
      <div class="md:flex md:justify-between md:items-center">
        <!-- Left side -->
        <div class="flex items-center mb-4 md:mb-0">
          <!-- Avatar -->
          <div class="mr-4">
            <img class="inline-flex rounded-full" :src="profileSummary.user.profile_photo_url" width="64" height="64" alt="User" />
          </div>
          <!-- User info -->
          <div>
            <div class="mb-2"><strong class="font-medium text-slate-800">{{ `${profileSummary.user.firstname} ${profileSummary.user.lastname}` }}</strong></div>
            <div class="mb-1">Location: {{profileSummary.user.location}}</div>
            <div v-if="profileSummary.user.team" class="mb-1">Team: {{ profileSummary.user.team.emoji}} {{profileSummary.user.team.name}}</div>
          </div>
        </div>
        <!-- Right side -->
        <div class="flex flex-col gap-2">
          <div class="text-3xl font-bold text-emerald-500">Fitpoints: {{ profileSummary.user.fitpoints }}</div>
          <div class="w-52 flex items-center">
            <IconGoogleFitSolo v-if="isEnabled('google_fit')"/>
            <IconStrava v-if="isEnabled('strava')"/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {fullAthleteName} from "@/utils";
import type {UserProfileSummary} from "@/model";
import IconGoogleFitSolo from "@/components/icons/IconGoogleFitSolo.vue";
import IconStrava from "@/components/icons/IconStrava.vue";

const props = defineProps<{profileSummary: UserProfileSummary}>()
const isEnabled = (integration:string) => { return props.profileSummary.integrations_enabled.includes(integration)}
</script>
