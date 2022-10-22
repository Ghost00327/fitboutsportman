<template>
  <ModalBlank id="info-modal" :modalOpen="modalOpen" @close-modal="$emit('close-modal')">
    <div class="p-5 flex space-x-4">
      <!-- Icon -->
      <div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-indigo-100">
        <svg class="w-4 h-4 shrink-0 fill-current text-indigo-500" viewBox="0 0 16 16">
          <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
        </svg>
      </div>
      <!-- Content -->
      <div>
        <!-- Modal header -->
        <div class="mb-2">
          <div class="text-lg font-semibold text-slate-800">Delete <b>{{name}}</b> integration?</div>
        </div>
        <!-- Modal content -->
        <div class="text-sm mb-10">
          <div class="space-y-2">
            <p>We are sad to see that you are disconnecting {{name}}. Please remember that you can enroll any integration anytime.</p>
          </div>
        </div>
        <!-- Modal footer -->
        <div class="flex flex-wrap justify-end space-x-2">
          <button class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white" @click.stop="$emit('close-modal')">No, keep integration</button>
          <button @click.stop="$emit('disconnect')" class="btn-sm border-slate-200 hover:border-slate-300 text-slate-600">Yes, disconnect {{name}}</button>
        </div>
      </div>
    </div>
  </ModalBlank>
</template>

<script setup lang="ts">
import type {Integration} from "@/model";
import {defineEmits} from "vue";
import ModalBlank from "@/partials/ModalBlank.vue";

const props = defineProps<{integration: Integration, name: string, modalOpen: boolean}>()
const emit = defineEmits(['disconnect'])

</script>