<template>
  <div class="relative">
    <flat-pickr :config="config"
                v-model="currentDate"
                @on-change="(chosenDate, b, c) => $emit('changed', chosenDate)"
                class="form-input pl-9 text-blue-500 hover:text-blue-600 font-medium focus:border-blue-300 w-60"></flat-pickr>
    <div class="absolute inset-0 right-auto flex items-center pointer-events-none">
      <svg class="w-4 h-4 fill-current text-blue-500 ml-3" viewBox="0 0 16 16">
        <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import flatPickr from 'vue-flatpickr-component'
import {defineEmits, ref} from "vue";

const emit = defineEmits(['changed'])
const props = defineProps<{start: Date, end: Date}>()

const currentDate = ref()

const config : any = {
  mode: 'range',
  wrap: false,
  static: true,
  monthSelectorType: 'dropdown',
  dateFormat: 'd/m/Y',
  defaultDate: [props.start, props.end],
  prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
  nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
}

</script>