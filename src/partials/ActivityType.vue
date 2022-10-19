<template>
  <li class="flex justify-between items-center py-3 border-b border-gray-200">
    <!-- Left -->
    <div>
      <div class="text-gray-800 font-semibold">{{ data.readable_name }}</div>
    </div>
    <!-- Right -->
    <div class="flex items-center ml-4">
      <div class="text-sm text-gray-400 italic mr-2" v-text="data.active ? 'On' : 'Off'"></div>
      <div class="form-switch">
        <input v-model="data.active" v-on:change="toggle" type="checkbox" :id="data.readable_name" class="sr-only" />
        <label class="bg-gray-400" :for="data.readable_name">
          <span class="bg-white shadow-sm" aria-hidden="true"></span>
          <span class="sr-only">Enable smart sync</span>
        </label>
      </div>
    </div>
  </li>

</template>

<script setup lang="ts">
import type {ActivityType} from "@/model";
import {SettingsProvider} from "@/providers/settings";
import {useBannerStore} from "@/stores/banner";
import {ref} from "vue";
import {ActivityTypes} from "@/providers/activityTypes";

const bannerStore = useBannerStore()
const { addBanner } = bannerStore

interface Props {
  data: ActivityType,
  activityTypesProvider?: ActivityTypes,
}

const props = withDefaults(defineProps<Props>(), {
  activityTypesProvider: () => new ActivityTypes()
})

function toggle() {
  console.log("DUPA")
  props.activityTypesProvider.update(props.data)
  addBanner({
    type: props.data.active ? "success" : "info",
    msg: `Activity type ${props.data.readable_name} ${props.data.active ? "enabled" : "disabled"}`
  })
}
</script>