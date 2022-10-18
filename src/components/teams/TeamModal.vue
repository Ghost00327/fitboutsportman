<template>
  <ModalAction id="new-team-modal" header="New Team" :modalOpen="modalOpen" @close-modal="$emit('close')">
    <div class="px-5 py-4">
      <div class="space-y-3">
        <div>
          <label class="block text-sm font-medium mb-1" for="name">Name <span class="text-red-500">*</span></label>
          <input v-model="team.name" id="name" class="form-input w-full px-2 py-1" type="text" required />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="emoji">Emoji <span class="text-red-500">*</span></label>
          <button v-on:click="emojiPickerOpen = true">
            {{ team.emoji || "🔍" }}
          </button>
          <FloatingEmojiPicker id="teamEmojiPicker" :open="emojiPickerOpen" @select="emojiSelected"/>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="active">Active <span class="text-red-500">*</span></label>
          <input v-model="team.active" id="active" type="checkbox" class="form-checkbox" />
        </div>
      </div>
    </div>

    <!-- Modal footer -->
    <div class="px-5 py-4 border-t border-gray-200">
      <div class="flex flex-wrap justify-end space-x-2">
        <button @click="$emit('delete')" v-if="team.id !== 0" class="btn-sm bg-red-500 hover:bg-red-600 border-gray-200 hover:border-gray-300 text-white">Delete</button>
        <button @click="$emit('close')" class="btn-sm border-gray-200 hover:border-gray-300 text-gray-600">Cancel</button>
        <button @click="$emit('submit')" class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Send</button>
      </div>
    </div>
  </ModalAction>
</template>

<script setup lang="ts">
import ModalAction from "@/partials/ModalAction.vue";
import type {Team} from "@/model";
import {onMounted, ref} from "vue";
import FloatingEmojiPicker from "@/partials/FloatingEmojiPicker.vue";

const emit = defineEmits(['submit', 'close', 'delete'])
const props = defineProps<{team: Team, modalOpen: boolean}>()
const emojiPickerOpen = ref(false)

function emojiSelected(emoji: any) {
  props.team.emoji = emoji.native
  emojiPickerOpen.value = false
}

onMounted(() => {

})
</script>