<template>
  <div v-show="open" :id="id" class="fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center px-4 sm:px-6" role="dialog" aria-modal="true">
    <Picker :data="emojiIndex" set="twitter" @select="(emoji: EmojiData) => $emit('select', emoji)" />
  </div>
</template>


<script setup lang="ts">
import {defineEmits, onMounted} from "vue";
// @ts-ignore.
import {Picker, EmojiIndex, EmojiView, EmojiData} from "emoji-mart-vue-fast/src";
import "emoji-mart-vue-fast/css/emoji-mart.css";
import data from "emoji-mart-vue-fast/data/all.json";

const emojiIndex = new EmojiIndex(data);
const emit = defineEmits(['select'])
const props = defineProps<{open: boolean, id: string}>()

onMounted(() => {

})
</script>