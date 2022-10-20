<template>
  <div class="grow">

    <IntegrationInfoModal :modal-open="integrationModalOpen" @close="integrationModalOpen = false"></IntegrationInfoModal>

    <!-- Panel body -->
    <div class="p-6">
      <h2 class="text-2xl text-slate-800 font-bold mb-5">Connected Apps</h2>

      <!-- Connected Apps cards -->
      <section class="pb-6 border-b border-slate-200">
        <div class="grid grid-cols-12 gap-6">
          <AppCard name="Google Fit" :active=true @details="integrationModalOpen = true">
            <template v-slot:img>
              <img class="max-h-10 max-w-sm" src="@/assets/images/google_fit.png">
            </template>
          </AppCard>

          <AppCard name="Strava" :active=false @details="integrationModalOpen = true">
            <template v-slot:img>
              <img class="max-h-10 max-w-sm" src="@/assets/images/strava.png">
            </template>
          </AppCard>

          <AppCard name="Apple Health" :active=false @details="integrationModalOpen = true">
            <template v-slot:img>
              <img class="max-h-10 max-w-sm" src="@/assets/images/apple_health.png">
            </template>
          </AppCard>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppCard from "@/partials/AppCard.vue";

import {ref} from "vue";
import IntegrationInfoModal from "@/partials/IntegrationInfoModal.vue";
const integrationModalOpen = ref(false)
</script>