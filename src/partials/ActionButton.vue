<template>
  <button
      @click.stop="$emit('clicked')"
      :class="clazz"
      :disabled="!active"
      class="btn bg-indigo-500 hover:bg-indigo-600 text-white disabled:opacity-25 ">
    <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
    </svg>
    <span class="hidden xs:block ml-2">{{ title }}</span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  active?: boolean,
  clazz?: string
  title: string,
}

const props = withDefaults(defineProps<Props>(), {
  active: () => true,
  clazz: () => ""
})
</script>