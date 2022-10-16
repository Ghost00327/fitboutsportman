<template>
  <div class="grow">

    <!-- Panel body -->
    <div class="p-6 space-y-6">
      <h2 class="text-2xl text-gray-800 font-bold mb-5">Activity types</h2>

      <!-- General -->
      <section>
        <h3 class="text-sm leading-snug text-gray-400 mb-1">
          This section defines what activity types are supported during challenge. When given activity types is enabled all related activities will count.
        </h3>
        <ul>
          <ActivityTypeComp
              v-for="activityType in allActivityTypes"
              :data="activityType"
              :checked-prop="checkedActivityTypes.find(value => value.id === activityType.id) !== undefined"
          />
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {ActivityType} from "@/model";
import ActivityTypeComp from "@/partials/ActivityType.vue"
import {ActivityTypes} from "@/providers/activityTypes";
import {SettingsProvider} from "@/providers/settings";

const allActivityTypes = ref<ActivityType[]>([])
const checkedActivityTypes = ref<ActivityType[]>([])

interface Props {
  activityTypesProvider?: ActivityTypes,
  settingsProvider?: SettingsProvider,
}

const props = withDefaults(defineProps<Props>(), {
  activityTypesProvider: () => new ActivityTypes(),
  settingsProvider: () => new SettingsProvider()
})

onMounted(async () => {
  checkedActivityTypes.value = (await props.settingsProvider.get()).data.activity_types
  allActivityTypes.value = (await props.activityTypesProvider.get()).data
})
</script>