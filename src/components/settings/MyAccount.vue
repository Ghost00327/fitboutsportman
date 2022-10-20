<template>
  <div class="p-6 space-y-6 grow">
    <h2 class="text-2xl text-gray-800 font-bold mb-5">My Account</h2>
    <!-- Picture -->
    <section>
      <div class="flex items-center">
        <div class="mr-4">
          <img class="w-20 h-20 rounded-full" :src="user.profile_photo_url" width="80" height="80" alt="User upload" />
        </div>
        <button class="btn-sm bg-blue-500 hover:bg-blue-600 text-white">Change</button>
      </div>
    </section>
    <section>
      <h3 class="text-xl leading-snug text-gray-800 font-bold mb-1">Public profile</h3>
      <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
        <div class="sm:w-1/3">
          <label class="block text-sm font-medium mb-1" for="firstname">First name</label>
          <input v-model="user.firstname" id="firstname" class="form-input w-full" type="text" />
        </div>
        <div class="sm:w-1/3">
          <label class="block text-sm font-medium mb-1" for="lastname">Last name</label>
          <input v-model="user.lastname" id="lastname" class="form-input w-full" type="text" />
        </div>

        <div class="sm:w-1/3">
          <label class="block text-sm font-medium mb-1" for="location">Location</label>
          <input v-model="user.city" id="location" class="form-input w-full" type="text" />
        </div>
      </div>
    </section>

    <section>
      <h3 class="text-xl leading-snug text-gray-800 font-bold mb-1">Account details</h3>
      <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
        <div class="sm:w-1/3">
          <label class="block text-sm font-medium mb-1" for="email">Email</label>
          <input v-model="user.email" id="email" class="form-input w-full" type="email" />
        </div>
      </div>
    </section>
    <footer>
      <div class="flex flex-col px-6 py-5 border-t border-blue-200">
        <div class="flex self-end">
          <button class="btn border-blue-200 hover:border-blue-300 text-gray-600">Cancel</button>
          <button @click="save" class="btn bg-blue-500 hover:bg-blue-600 text-white ml-3">Save Changes</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {useAthleteStore} from "@/stores/athlete";
import {storeToRefs} from "pinia/dist/pinia";
import {AthleteProvider} from "@/providers/athleteProvider";
import ActionButton from "@/partials/ActionButton.vue";
import {useBannerStore} from "@/stores/banner";

const athleteStore  = useAthleteStore();
const {user} = storeToRefs(athleteStore)
const bannerStore = useBannerStore()
const { addBanner } = bannerStore

interface Props {
  athleteProvider?: AthleteProvider,
}

const props = withDefaults(defineProps<Props>(), {
  athleteProvider: () => new AthleteProvider(),
})

function save() {
  props.athleteProvider.update(user.value)
  addBanner({
    type: 'success',
    msg: `Profile settings updated.`
  })
}
</script>