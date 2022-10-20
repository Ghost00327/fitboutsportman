<template>
  <ModalAction id="badge-modal" :header="badgeModal.header" :modalOpen="modalOpen" @close-modal="$emit('close')">
    <div class="px-5 py-4">
      <div class="space-y-3">
        <div>
          <label class="block text-sm font-medium mb-1" for="name">Name <span class="text-red-500">*</span></label>
          <input v-model="badgeModal.badge.name" id="name" class="form-input w-full px-2 py-1" type="text" required />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="emoji">Description <span class="text-red-500">*</span></label>
          <input v-model="badgeModal.badge.description" id="emoji" class="form-input w-full px-2 py-1" type="email" required />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="active">Min points <span class="text-red-500">*</span></label>
          <input v-model="badgeModal.badge.min_points" id="active" type="number" class="form-input" />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="emoji">Emoji <span class="text-red-500">*</span></label>
          <button v-on:click="emojiPickerOpen = true">
            {{ badgeModal.badge.emoji || "🔍" }}
          </button>
          <FloatingEmojiPicker id="teamEmojiPicker" :open="emojiPickerOpen" @select="emojiSelected"/>
        </div>
      </div>
    </div>

    <!-- Modal footer -->
    <div class="px-5 py-4 border-t border-gray-200">
      <div class="flex flex-wrap justify-end space-x-2">
        <button @click="$emit('delete')" v-if="badgeModal.badge.id !== 0" class="btn-sm bg-red-500 hover:bg-red-600 border-gray-200 hover:border-gray-300 text-white">Delete</button>
        <button @click="$emit('close')" class="btn-sm border-gray-200 hover:border-gray-300 text-gray-600">Cancel</button>
        <button @click="$emit('submit')" class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Save</button>
      </div>
    </div>
  </ModalAction>
</template>


<script setup lang="ts">
import ModalAction from "@/partials/ModalAction.vue";
import type {Badge} from "@/model";
import {ref} from "vue";
import FloatingEmojiPicker from "@/partials/FloatingEmojiPicker.vue";

const emit = defineEmits(['submit', 'close', 'delete'])
const props = defineProps<{badgeModal: { badge: Badge, header: string }, modalOpen: boolean}>()
const emojiPickerOpen = ref(false)

function emojiSelected(emoji: any) {
  props.badgeModal.badge.emoji = emoji.native
  emojiPickerOpen.value = false
}
</script>