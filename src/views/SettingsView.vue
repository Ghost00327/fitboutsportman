<template>
  <GenericAppView page-heading-title="Settings ✨" :grid="false">
    <template v-slot:mainContent>
      <div class="bg-white shadow-lg rounded-sm mb-8">
        <div class="flex flex-col md:flex-row md:-mr-px">
          <!-- Sidebar -->
          <SettingsSidebar/>
          <!-- Panel -->
          <router-view></router-view>
        </div>
      </div>
    </template>
  </GenericAppView>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GenericAppView from "@/views/GenericAppView.vue";
import SettingsSidebar from "@/partials/SettingsSidebar.vue";

const sidebarOpen = ref(true)
</script>