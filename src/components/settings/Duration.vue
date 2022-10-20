<template>
  <section>
    <h3 class="text-xl leading-snug text-gray-800 font-bold mb-1">Duration</h3>
    <div class="text-sm leading-snug text-gray-800 mb-1">
      Activities completed outside of the below time window don't contribute to the points collected by users.
    </div>

    <div class="flex py-3">
      <Datepicker v-if="settings != null" @changed="changed" :start="start" :end="end"/>
      <div class="px-2">
        <ActionButton @clicked="save" title="Apply" :active="saveButtonActive"/>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ActionButton from "@/partials/ActionButton.vue"
import Datepicker from "@/partials/Datepicker.vue";
import {onMounted, ref} from "vue";
import {ActivityTypes} from "@/providers/activityTypes";
import {SettingsProvider} from "@/providers/settings";
import type {Settings} from "@/model";
import {useBannerStore} from "@/stores/banner";

const bannerStore = useBannerStore()
const { addBanner } = bannerStore

const settings = ref<Settings>()
const start = ref()
const end = ref()
const saveButtonActive = ref(false)

interface Props {
  activityTypesProvider?: ActivityTypes,
  settingsProvider?: SettingsProvider,
}

const props = withDefaults(defineProps<Props>(), {
  activityTypesProvider: () => new ActivityTypes(),
  settingsProvider: () => new SettingsProvider()
})

function changed(changedDates: Date[]) {
  saveButtonActive.value = true
  start.value = changedDates[0]
  //The first click on the datepicker triggers this callback with only single (start) date hence fix
  if (changedDates.length > 1) {
    end.value = changedDates[1]
  } else {
    end.value = changedDates[0]
  }
}

function save() {
  const newSettings : Settings = Object.assign({}, settings.value, {
    start_date: start.value.toISOString().slice(0,10), //fetch YYYY-MM-DD
    end_date: end.value.toISOString().slice(0,10)
  });
  props.settingsProvider.update(newSettings)
  addBanner({
    type: 'success',
    msg: `New duration values saved.`
  })
}

onMounted(async () => {
  const loadedSettings = (await props.settingsProvider.get()).data
  start.value = new Date(loadedSettings?.start_date)
  end.value = new Date(loadedSettings?.end_date)
  settings.value = loadedSettings
})
</script>