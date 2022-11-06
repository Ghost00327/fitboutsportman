<template>
  <div class="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-blue-200">
    <!-- Card content -->
    <div class="flex flex-col h-full p-5">
      <div class="grow">
        <header class="flex justify-between mb-4">
          <div class="flex items-center">
            <div>
              <slot name="img"/>
            </div>
            <h3 class="text-lg text-gray-800 font-semibold">{{ availableIntegration.name }}</h3>
          </div>
          <button @click.stop="refresh" v-if="integration" class="cursor-pointer btn-sm border-gray-200 hover:border-gray-300 shadow-sm ">
            <svg v-if="refreshing" class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-emerald-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-emerald-500 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            <span>Refresh activities</span>
          </button>
        </header>
        <div class="text-sm">{{ availableIntegration.description }}</div>
      </div>
      <!-- Card footer -->
      <footer class="mt-4">
        <div class="flex flex-wrap justify-between items-center">
          <div class="flex">
            <button class="btn-sm border-gray-200 hover:border-gray-300 shadow-sm flex items-center">
              <span>Details</span>
            </button>
          </div>

          <!-- Right side -->
          <button @click.stop="enroll" v-if="!integration" class="btn-sm border-gray-200 hover:border-gray-300 shadow-sm flex items-center">
            <svg class="w-3 h-3 shrink-0 fill-current text-red-500 mr-2" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span>Enroll</span>
          </button>

          <DeleteAppModal
              v-if="integration"
              :name="availableIntegration.name"
              :modal-open="deleteModalOpen"
              :integration="integration"
              @disconnect="disconnect"
              @close-modal="deleteModalOpen = false"
          />

        
          <span @click.stop="deleteModalOpen = true" v-if="integration" class="cursor-default btn-sm border-gray-200 hover:border-gray-300 shadow-sm flex items-center">
            <svg class="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
              <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
            </svg>
            <span>Connected</span>
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {AvailableIntegration, Integration} from "@/model";
import {IntegrationProvider} from "@/providers/integrationProvider";
import DeleteAppModal from "@/components/settings/apps/DeleteAppModal.vue";
import {ref} from "vue";
import {AthleteProvider} from "@/providers/athleteProvider";
import {useAthleteStore} from "@/stores/athlete";
import {useBannerStore} from "@/stores/banner";

const deleteModalOpen = ref(false)
const refreshing = ref(false)

interface Props {
  athleteProvider?: AthleteProvider,
  integrationProvider?: IntegrationProvider,
  availableIntegration: AvailableIntegration,
  integration: Integration | undefined,
}

const props = withDefaults(defineProps<Props>(), {
  integrationProvider: () => new IntegrationProvider(),
  athleteProvider: () => new AthleteProvider(),
})

function enroll() {
  if (props.availableIntegration.type == 'google_fit') {
    window.location.href = import.meta.env.VITE_API_URL + "/auth/google";
  }
  if (props.availableIntegration.type == 'strava') {
    window.location.href = import.meta.env.VITE_API_URL + "/auth/strava";
  }
  if (props.availableIntegration.type == 'apple_health') {
    window.location.href = import.meta.env.VITE_API_URL + "/auth/google";
  }
}
async function refresh() {
  refreshing.value = true
  const athlete = await useAthleteStore().fetch();
  props.athleteProvider.refreshActivities(athlete.id, props.availableIntegration.type).then(
   () => {
    refreshing.value = false
    useBannerStore().addBanner({type: 'success', title: "Refresh activities done", msg: `We have scheduled refresh of ${props.availableIntegration.name} activities. Please check check your profile in a few seconds.` })
   }
  )
}

function disconnect() {
  if (props.integration) {
    props.integrationProvider.delete(props.integration)
  }
}
</script>