<template>
  <li :class="{'border-b-2': !data.active}" class="flex justify-between items-center py-3 border-gray-200">
    <!-- Left -->
    <div>
      <div class="text-gray-800 font-semibold">{{ data.readable_name }}</div>
    </div>
    <!-- Right -->
    <div class="flex items-center ml-4">
      <div class="text-sm text-gray-400 italic mr-2" v-text="data.active ? 'On' : 'Off'"></div>
      <div class="form-switch">
        <input v-model="data.active" v-on:change="update('Activity ' + data.readable_name + ' updated.')" type="checkbox" :id="data.readable_name" class="sr-only" />
        <label class="bg-gray-400" :for="data.readable_name">
          <span class="bg-white shadow-sm" aria-hidden="true"></span>
          <span class="sr-only">Enable smart sync</span>
        </label>
      </div>
    </div>
  </li>

  <li v-if="data.active" :class="{'border-b-2': data.active}" class="flex justify-between items-center pb-3 border-gray-200">
    <div class="flex justify-end space-x-4 pl-3">
      <div class="flex-1">
        <label class="block text-sm font-medium mb-1" for="card-cvc">Formula</label>
        <select v-model="data.formula" @change="update('Activity ' + data.readable_name + ' changed to ' + data.formula)" id="formula" class="form-select">
          <option value="calories">Points per one minute of activity</option>
          <option value="time">Points per one hundred burned calories</option>
          <option value="distance">Points per one kilometer travelled</option>
        </select>
      </div>
      <div class="flex-2">
        <label class="block text-sm font-medium mb-1" for="formula-value">Formula value <span class="text-rose-500">*</span></label>
        <input v-if="data.formula === 'time'" v-model="data.points_per_100calories" @change="update('Activity ' + data.readable_name + ' value set to ' + data.points_per_100calories)" id="formula-value" class="form-input w-full" type="number" placeholder="" />
        <input v-if="data.formula === 'calories'" v-model="data.points_per_km" @change="update('Activity ' + data.readable_name + ' value set to ' + data.points_per_km)" id="formula-value" class="form-input w-full" type="number" placeholder="" />
        <input v-if="data.formula === 'distance'" v-model="data.points_per_minute" @change="update('Activity ' + data.readable_name + ' value set to ' + data.points_per_minute)" id="formula-value" class="form-input w-full" type="number" placeholder="" />
      </div>
    </div>
  </li>

</template>

<script setup lang="ts">
import type {ActivityType} from "@/model";
import {useBannerStore} from "@/stores/banner";
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

function update(bannerContent: string) {
  props.activityTypesProvider.update(props.data)
  addBanner({
    type: props.data.active ? "success" : "info",
    msg: bannerContent
  })
}
</script>