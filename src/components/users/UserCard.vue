<template>
  <div
    class="col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-gray-200"
  >
    <div class="flex flex-col h-full">
      <!-- Card top -->
      <div class="grow p-5">
        <div class="relative">
          <div class="absolute top-0 right-0 flex gap-[3px] cursor-pointer">
            <div class="w-1 h-1 rounded-full bg-gray-400"></div>
            <div class="w-1 h-1 rounded-full bg-gray-400"></div>
            <div class="w-1 h-1 rounded-full bg-gray-400"></div>
          </div>
        </div>

        <header>
          <div class="flex gap-3">
            <div class="flex justify-center mb-2">
              <div
                class="absolute top-0 right-0 -mr-2 bg-white rounded-full shadow"
                aria-hidden="true"
              >
                <svg
                  class="w-8 h-8 fill-current text-amber-500"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M21 14.077a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 010 1.5 1.5 1.5 0 00-1.5 1.5.75.75 0 01-.75.75zM14 24.077a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z"
                  />
                </svg>
              </div>
              <img
                class="rounded-full"
                :src="user.profile_photo_url"
                width="64"
                height="64"
                :alt="fullAthleteName(user)"
              />
            </div>
            <div class="flex flex-col">
              <div class="text-left">
                <h2 class="text-xl leading-snug justify-center font-semibold">
                  {{ fullAthleteName(user) }}
                </h2>
              </div>
              <div v-if="user.team" class="flex text-left">
                <span>{{ user.team.emoji }} {{ user.team.name }} </span>
              </div>
            </div>
          </div>
        </header>
        <div class="text-left">
          <div class="text-md">{{ user.city }}</div>
        </div>
      </div>
      <router-link
        :to="{ name: 'user', params: { id: user.id.toString() } }"
        class="relative inline-flex items-start"
      >
        <button
          class="w-full p-3 text-md text-center border-b border-t border-gray-300 hover:text-indigo-500"
        >
          Go to profile
        </button>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { User } from "@/model";
import { fullAthleteName } from "@/utils";

const props = defineProps<{ user: User }>();
</script>
