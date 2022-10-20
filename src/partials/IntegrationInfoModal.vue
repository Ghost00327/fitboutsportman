<template>
  <ModalAction id="integration-modal" :modalOpen="modalOpen" @close-modal="emit('close')">
    <!-- Modal header -->
    <div class="mb-5 text-center">
      <div class="text-lg font-semibold text-slate-800">Connect Mosaic with your Cruip account</div>
    </div>
    <!-- Modal content -->
    <div class="text-sm mb-5">
      <div class="font-medium text-slate-800 mb-3">Mosaic would like to:</div>
      <ul class="space-y-2 mb-5">
        <li class="flex items-center">
          <svg class="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
          </svg>
          <div>Lorem ipsum dolor sit amet</div>
        </li>
        <li class="flex items-center">
          <svg class="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
          </svg>
          <div>Semper eget duis at tellus at urna</div>
        </li>
        <li class="flex items-center">
          <svg class="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
          </svg>
          <div>Lorem ipsum dolor sit amet</div>
        </li>
        <li class="flex items-center">
          <svg class="w-3 h-3 shrink-0 fill-current text-emerald-500 mr-2" viewBox="0 0 12 12">
            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
          </svg>
          <div>Suspendisse faucibus interdum</div>
        </li>
      </ul>
      <div class="text-xs text-slate-500">By clicking on Allow access, you authorize Mosaic to use your information in accordance with its <a class="text-indigo-500 hover:text-indigo-600" href="#0">Privacy Policy</a>. You can stop it at any time on the integrations page of your Mosaic account.</div>
    </div>
    <!-- Modal footer -->
    <div class="flex flex-wrap justify-end space-x-2">
      <button class="btn-sm border-slate-200 hover:border-slate-300 text-slate-600" @click.stop="emit('close')">Cancel</button>
    </div>
  </ModalAction>
</template>


<script setup lang="ts">
import ModalAction from "@/partials/ModalAction.vue";
import {defineEmits} from "vue";
const props = defineProps<{modalOpen: boolean}>()
const emit = defineEmits(['close'])
</script>