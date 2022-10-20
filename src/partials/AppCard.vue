<template>
  <div class="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-blue-200">
    <!-- Card content -->
    <div class="flex flex-col h-full p-5">
      <div class="grow">
        <header class="flex items-center mb-4">
          <div class="max-h-10">
            <slot name="img"/>
          </div>
          <h3 class="text-lg text-gray-800 font-semibold">{{ name }}</h3>
        </header>
        <div class="text-sm">Lorem ipsum dolor sit amet eiusmod sed do eiusmod tempor.</div>
      </div>
      <!-- Card footer -->
      <footer class="mt-4">
        <div class="flex flex-wrap justify-between items-center">
          <div @click.stop="emit('details')" class="flex space-x-3">
            <button class="btn-sm border-gray-200 hover:border-gray-300 shadow-sm flex items-center">
              <span>Details</span>
            </button>
          </div>

          <!-- Right side -->
          <button v-if="!active" class="btn-sm border-gray-200 hover:border-gray-300 shadow-sm flex items-center">
            <svg class="w-3 h-3 shrink-0 fill-current text-red-500 mr-2" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span>Enroll</span>
          </button>

          <span v-if="active" class="cursor-default btn-sm border-gray-200 hover:border-gray-300 shadow-sm flex items-center">
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

import {defineEmits} from "vue";

const props = defineProps<{name: string, active: boolean}>()
const emit = defineEmits(['details'])
</script>