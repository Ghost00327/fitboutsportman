<template>
  <div class="grow">

    <!-- Panel body -->
    <div class="p-6 space-y-6">
      <h2 class="text-2xl text-gray-800 font-bold mb-5">Challenge Settings</h2>
      <Duration/>
      <Badges/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Badges from "@/components/settings/badge/Badges.vue";
import Duration from "@/components/settings/Duration.vue";
</script>