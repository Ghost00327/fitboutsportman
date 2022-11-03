<template>
  <GenericAppView page-heading-title="">
    <template v-slot:mainContent>
      <UserProfilePage/>
    </template>
  </GenericAppView>
</template>

<script setup lang="ts">
import GenericAppView from "@/views/GenericAppView.vue";
import UserProfilePage from "@/components/user/UserProfilePage.vue";
</script>