<template>
  <li :class="{'border-b-2': !data.active}" class="flex justify-between items-center py-3 border-gray-200">
    <!-- Left -->
    <div>
      <div class="text-gray-800 font-semibold">{{ data.readable_name }}</div>
    </div>
    <!-- Right -->
    <div class="flex items-center ml-4">
      <div class="form-switch">
        <Switch v-model="data.active"
                @update:modelValue="update('Activity ' + data.readable_name + ' updated.')"
                :class="[data.active ? 'bg-blue-600' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2']">
          <span class="sr-only">Use setting</span>
          <span
              :class="[data.active ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']">
      <span
          :class="[data.active ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200', 'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity']"
          aria-hidden="true">
        <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
          <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
      </span>
      <span
          :class="[data.active ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100', 'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity']"
          aria-hidden="true">
        <svg class="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
          <path
              d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"/>
        </svg>
      </span>
    </span>
        </Switch>
      </div>
    </div>
  </li>

  <TransitionRoot
      appear
      :show="data.active"
      enter="transition-opacity duration-500"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-500"
      leave-from="opacity-100"
      leave-to="opacity-0">
    <li :class="{'border-b-2': data.active}" class="flex justify-between items-center pb-3 border-gray-200">
      <div class="flex justify-end space-x-4 pl-3">
        <div class="flex-1">
          <label class="block text-sm font-medium mb-1" for="card-cvc">Formula</label>
          <select v-model="data.formula" @change="update('Formula for ' + data.readable_name + ' changed to ' + data.formula)" id="formula" class="form-select">
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
  </TransitionRoot>

</template>

<script setup lang="ts">
import type {ActivityType} from "@/model";
import {useBannerStore} from "@/stores/banner";
import {ActivityTypes} from "@/providers/activityTypes";
import {TransitionRoot} from "@headlessui/vue";
import { Switch } from '@headlessui/vue'

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
    type: "success",
    msg: bannerContent
  })
}
</script>