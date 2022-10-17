<template>
  <div class="col-span-full xl:col-span-6 2xl:col-span-4 bg-white shadow-md rounded-sm border border-gray-200">
    <!-- Card content -->
    <div class="flex flex-col h-full p-5">
      <div class="grow">
        <header class="flex items-center mb-4">
          <div class="w-10 h-10 rounded-full shrink-0 bg-gradient-to-tr from-pink-500 to-pink-300 mr-3">
            <svg class="w-10 h-10 fill-current text-white" viewBox="0 0 40 40">
              <path d="M26.946 18.005a.583.583 0 00-.53-.34h-6.252l.985-3.942a.583.583 0 00-1.008-.52l-7 8.167a.583.583 0 00.442.962h6.252l-.984 3.943a.583.583 0 001.008.52l7-8.167a.583.583 0 00.087-.623z" />
            </svg>
          </div>
          <h3 class="text-lg text-gray-800 font-semibold">{{ badge.name }}</h3>
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
            <svg class="w-3 h-3 shrink-0 fill-current text-green-500 mr-2" viewBox="0 0 12 12">
              <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
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