<template>
  <GenericAppView page-heading-title="Users ✨">
    <template v-slot:actions>
      <ActionButton @clicked="addMemberModalOpen = true" title="Add member"/>
    </template>

    <template v-slot:mainContent>
      <InviteUser :modal-open="addMemberModalOpen" @close-modal="addMemberModalOpen = false"/>
      <Users/>
    </template>
  </GenericAppView>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GenericAppView from "@/views/GenericAppView.vue";
import ActionButton from "@/partials/ActionButton.vue";
import Users from "@/components/users/Users.vue";
import InviteUser from "@/components/users/InviteUser.vue";

const addMemberModalOpen = ref(false)
const sidebarOpen = ref(true)
</script>