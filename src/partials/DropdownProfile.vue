<template>
  <div class="relative inline-flex">
    <button
      ref="trigger"
      class="inline-flex justify-center items-center group"
      aria-haspopup="true"
      :aria-expanded="dropdownOpen"
    >
      <img class="w-8 h-8 rounded-full" :src="user.profile_photo_url" width="32" height="32" alt="User" />
      <div class="flex items-center truncate">
        <span class="truncate ml-2 text-sm font-medium group-hover:text-blue-800">{{ fullAthleteName(user) }}</span>
        <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-blue-400" viewBox="0 0 12 12">
          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
        </svg>
      </div>
    </button>
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0 -tranblue-y-2"
      enter-to-class="opacity-100 tranblue-y-0"
      leave-active-class="transition ease-out duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-show="dropdownOpen" class="origin-top-right z-10 absolute top-full min-w-44 bg-white border border-blue-200 py-1.5 rounded shadow-lg overflow-hidden mt-1" :class="align === 'right' ? 'right-0' : 'left-0'">
        <div class="pt-0.5 pb-2 px-3 mb-1 border-b border-blue-200">
          <div class="text-xs text-blue-500 italic">Administrator</div>
        </div>
        <ul
          ref="dropdown"
          @focusin="dropdownOpen = true"
          @focusout="dropdownOpen = false"
        >
          <li>
            <router-link :to="{ name: 'user', params: { id: user.id.toString() }}" class="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3">
              My profile
            </router-link>
          </li>
          <li>
            <router-link to="/settings/account" @click="dropdownOpen = false" class="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3">
              Settings
            </router-link>
          </li>
          <li>
            <router-link to="/signin" class="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3" @click="dropdownOpen = false">
              Sign Out
            </router-link>
          </li>
        </ul>
      </div> 
    </transition>
  </div>
</template>


<script setup lang="ts">
import {onMounted, ref} from "vue";
import {useAthleteStore} from "@/stores/athlete";
import {storeToRefs} from "pinia";
import {fullAthleteName} from "@/utils";

const props = defineProps<{align: string}>()

const athleteStore = useAthleteStore();
const {user} = storeToRefs(athleteStore)

const dropdownOpen = ref(false)
const trigger = ref<HTMLButtonElement | null>(null)
const dropdown = ref(null)

onMounted(() => {
  if (!trigger.value) return;
  trigger.value.addEventListener('click', ev => {
    dropdownOpen.value = !dropdownOpen.value
  })
})
</script>