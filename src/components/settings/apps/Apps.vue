<template>
  <div class="grow">

    <IntegrationInfoModal :modal-open="integrationModalOpen" @close="integrationModalOpen = false"></IntegrationInfoModal>

    <!-- Panel body -->
    <div class="p-6">
      <h2 class="text-2xl text-gray-800 font-bold mb-5">Connected Apps</h2>

      <!-- Connected Apps cards -->
      <section class="pb-6 border-b border-blue-200">
        <div class="grid grid-cols-12 gap-6">
          <AppCard
              v-for="integrationCandidate in integrationCandidates"
              :integrationCandidate="integrationCandidate"
              :integration="integrations.find(value => value.integration_candidate_id === integrationCandidate.id)"
              @details="integrationModalOpen = true">
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
import type {IntegrationCandidate, Integration} from "@/model";
const integrationModalOpen = ref(false)

const integrations = ref([] as Integration[])
const integrationCandidates = ref([] as IntegrationCandidate[])

interface Props {
  integrationProvider?: IntegrationProvider,
}

const props = withDefaults(defineProps<Props>(), {
  integrationProvider: () => new IntegrationProvider(),
})

onMounted(async () => {
  integrations.value = (await props.integrationProvider.get()).data
  integrationCandidates.value = (await props.integrationProvider.getIntegrationCandidates()).data
})
</script>