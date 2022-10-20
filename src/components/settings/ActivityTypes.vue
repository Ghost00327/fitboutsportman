<template>
  <div class="grow">

    <!-- Panel body -->
    <div class="p-6 space-y-6">
      <h2 class="text-2xl text-gray-800 font-bold">Activity types</h2>

      <!-- General -->
      <section>
        <h3 class="text-sm leading-snug text-gray-800 mb-1 mt-1">
          This section defines what activity types are supported during challenge. When given activity types is enabled all related activities will count.
        </h3>
        <ul>
          <ActivityTypeComp
              v-for="activityType in activityTypes"
              :data="activityType"
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

const activityTypes = ref<ActivityType[]>([])

interface Props {
  activityTypesProvider?: ActivityTypes,
}

const props = withDefaults(defineProps<Props>(), {
  activityTypesProvider: () => new ActivityTypes(),
})

onMounted(async () => {
  activityTypes.value = (await props.activityTypesProvider.get()).data.sort((n1,n2) => n1.id - n2.id);
})
</script>