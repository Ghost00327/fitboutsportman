<template>
  <TransitionRoot
      appear
      :show="open"
      enter="transition-opacity duration-1000"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-200"
      leave-from="opacity-100"
      leave-to="opacity-0"
  >
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div aria-live="assertive" class="flex w-full flex-col items-center space-y-4 sm:items-end">
    <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
    <transition enter-active-class="transform ease-out duration-800 transition" enter-from-class="tranblue-y-2 opacity-0 sm:tranblue-y-0 sm:tranblue-x-2" enter-to-class="tranblue-y-0 opacity-100 sm:tranblue-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="open" class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
        <div class="p-4">
          <div class="flex items-start">
            <div class="flex-shrink-0">
              <CheckCircleIcon v-if="banner.type === 'success'" class="h-6 w-6 text-green-400" aria-hidden="true" />
              <InformationCircleIcon v-if="banner.type === 'info'" class="h-6 w-6 text-green-400" aria-hidden="true" />
              <XCircleIcon v-if="banner.type === 'error'" class="h-6 w-6 text-green-400" aria-hidden="true" />
              <MinusCircleIcon v-if="banner.type === 'warning'" class="h-6 w-6 text-green-400" aria-hidden="true" />
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
              <p v-if="banner.title" class="text-sm font-medium text-gray-900">{{ banner.title }}</p>
              <p class="mt-1 text-sm text-gray-500">{{ banner.msg }}</p>
            </div>
            <div class="ml-4 flex flex-shrink-0">
              <button type="button" @click="hide" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span class="sr-only">Close</span>
                <XMarkIcon class="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
  </TransitionRoot>

</template>


<script setup lang="ts">
import { CheckCircleIcon } from '@heroicons/vue/24/outline'
import { XMarkIcon } from '@heroicons/vue/20/solid'
import { InformationCircleIcon } from '@heroicons/vue/24/outline'
import { XCircleIcon } from '@heroicons/vue/24/outline'
import { MinusCircleIcon } from '@heroicons/vue/24/outline'
import {onMounted, ref} from "vue";
import {useBannerStore} from "@/stores/banner";
import type {Banner} from "@/stores/banner";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const props = defineProps<{banner: Banner}>()
const open = ref(true)
const bannerStore = useBannerStore()
const { removeBanner } = bannerStore

function hide() {
  removeBanner(props.banner.msg)
  open.value = false
}

onMounted(() => {
  setTimeout(() => hide(), 3000)
})
</script>