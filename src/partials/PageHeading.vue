<template>
  <!-- Page header -->
  <div class="sm:flex sm:justify-between sm:items-center mb-8">

    <!-- Left: Title -->
    <div class="mb-4 sm:mb-0">
      <h1 class="text-2xl md:text-3xl text-gray-800 font-bold">{{ title }}</h1>
    </div>

    <slot/>
  </div>
</template>


<script setup lang="ts">
const props = defineProps<{title: string}>()
</script>