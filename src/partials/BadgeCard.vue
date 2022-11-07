<template>
  <div class="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-gray-200">
    <!-- Card content -->
    <div class="flex flex-col h-full p-5 rounded-lg">
      <div class="grow">
        <header @click.stop="$emit('edit')" class="cursor-pointer flex items-center mb-4 bg-gradient-to-tr from-sky-400 to-indigo-500 rounded-full">
          <div class="w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr  from-rose-400 to-red-300 mr-3">
            <div class="grid place-items-center mt-2">
              {{ badge.emoji }}
            </div>
          </div>
          <h3 class="text-lg text-white font-semibold">{{ badge.name }}</h3>
        </header>
        <div class="text-sm">{{ badge.description || "You are the real Sportacus. Keep going" }}.</div>
      </div>
      <!-- Card footer -->
      <footer class="mt-4">
        <div class="flex flex-wrap justify-between items-center">
          <!-- Left side -->
          <div class="flex space-x-3">
            <div class="flex items-center text-yellow-500">
              <svg class="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
                <path d="M10 5.934L8 0 6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934z" />
              </svg>
              <div class="text-sm text-yellow-600">{{ badge.min_points }}</div>
            </div>
          </div>
          <!-- Right side -->
          <button @click.stop="$emit('edit')"
                  class="btn-sm border-gray-200 hover:border-gray-300 shadow-sm flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-green-500 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <span>Edit</span>
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>


<script setup lang="ts">
import type {Badge} from "@/model";

const props = defineProps<{badge: Badge}>()
</script>