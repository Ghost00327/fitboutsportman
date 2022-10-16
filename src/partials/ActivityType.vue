<template>
  <li class="flex justify-between items-center py-3 border-b border-gray-200">
    <!-- Left -->
    <div>
      <div class="text-gray-800 font-semibold">{{ data.readable_name }}</div>
    </div>
    <!-- Right -->
    <div class="flex items-center ml-4">
      <div class="text-sm text-gray-400 italic mr-2" v-text="checked ? 'On' : 'Off'"></div>
      <div class="form-switch">
        <input @click="toggle" :checked="checked" type="checkbox" :id="data.strava_name" class="sr-only" />
        <label class="bg-gray-400" :for="data.strava_name">
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

const bannerStore = useBannerStore()
const { addBanner } = bannerStore

interface Props {
  data: ActivityType,
  checkedProp: boolean,
  settingsProvider?: SettingsProvider,
}

const props = withDefaults(defineProps<Props>(), {
  settingsProvider: () => new SettingsProvider()
})

const checked = ref<boolean>(props.checkedProp)

function toggle() {
  checked.value = !checked.value
  props.settingsProvider.toggle(props.data)
  addBanner({
    type: checked.value ? "success" : "info",
    msg: `Activity type ${checked.value ? "enabled" : "disabled"}`
  })
}
</script>