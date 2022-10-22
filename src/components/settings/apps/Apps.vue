<template>
  <div class="grow">

    <IntegrationInfoModal :modal-open="integrationModalOpen" @close="integrationModalOpen = false"></IntegrationInfoModal>

    <!-- Panel body -->
    <div class="p-6">
      <h2 class="text-2xl text-gray-800 font-bold mb-5">Connected Apps</h2>

      <!-- Connected Apps cards -->
      <section class="pb-6 border-b border-blue-200">
        <div class="grid grid-cols-12 gap-6">
          <AppCard v-for="availableIntegration in availableIntegrations" :availableIntegration="availableIntegration" :integration="integrations.find(value => value.type === availableIntegration.type)" @details="integrationModalOpen = true">
            <template v-slot:img>
              <img v-if="availableIntegration.type === 'strava'" class="max-h-10 max-w-sm" src="@/assets/images/strava.png">
              <img v-if="availableIntegration.type === 'google_fit'" class="max-h-10 max-w-sm" src="@/assets/images/google_fit.png">
              <img v-if="availableIntegration.type === 'apple_health'" class="max-h-10 max-w-sm" src="@/assets/images/apple_health.png">
            </template>
          </AppCard>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppCard from "@/partials/AppCard.vue";

import {onMounted, ref} from "vue";
import IntegrationInfoModal from "@/partials/IntegrationInfoModal.vue";
import {IntegrationProvider} from "@/providers/integrationProvider";
import type {AvailableIntegration, Integration} from "@/model";
const integrationModalOpen = ref(false)

const integrations = ref([] as Integration[])
const availableIntegrations = ref([] as AvailableIntegration[])

interface Props {
  integrationProvider?: IntegrationProvider,
}

const props = withDefaults(defineProps<Props>(), {
  integrationProvider: () => new IntegrationProvider(),
})

onMounted(async () => {
  integrations.value = (await props.integrationProvider.get()).data
  availableIntegrations.value = (await props.integrationProvider.getAvailable()).data
})


</script>