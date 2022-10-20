<template>
  <GenericAppView page-heading-title="Teams ✨">
    <template v-slot:actions>
      <ActionButton @clicked="newTeamModalOpen = true" title="New Team"/>
    </template>

    <template v-slot:mainContent>
      <NewTeam :new-team-modal-open="newTeamModalOpen" @close-modal="newTeamModalOpen = false"/>
      <Teams />
    </template>
  </GenericAppView>
</template>

<script setup lang="ts">
import Teams from '../components/teams/Teams.vue'

import { ref } from 'vue'
import NewTeam from "@/components/teams/NewTeam.vue";
import GenericAppView from "@/views/GenericAppView.vue";
import ActionButton from "@/partials/ActionButton.vue";

const newTeamModalOpen = ref(false)
const sidebarOpen = ref(true)
</script>