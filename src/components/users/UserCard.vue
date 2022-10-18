<template>
  <div class="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-gray-200">
    <div class="flex flex-col h-full">
      <!-- Card top -->
      <div class="grow p-5">
        <!-- Image + name -->
        <header>
          <div class="flex justify-center mb-2">
            <a class="relative inline-flex items-start" href="#0">
              <img class="rounded-full" :src="user.profile_photo_url" width="64" height="64" alt="User 01" />
            </a>
          </div>
          <div class="text-center">
            <a class="inline-flex text-gray-800 hover:text-gray-900" href="#0">
              <h2 class="text-xl leading-snug justify-center font-semibold">{{ fullAthleteName(user) }}</h2>
            </a>
          </div>
          <div class="flex justify-center items-center"><span>{{ user.team.emoji }} {{ user.team.name}} </span></div>
        </header>
        <!-- Bio -->
        <div class="text-center mt-2">
          <div class="text-sm">123 activities and counting...</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import type {User} from "@/model";
import {fullAthleteName} from "@/utils";

const props = defineProps<{user: User}>()
</script>