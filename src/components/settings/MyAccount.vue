<template>
  <div class="p-6 space-y-6 grow">
    <!-- Picture -->
    <section>
      <div class="flex justify-between">
        <h2 class="text-2xl text-gray-800 font-bold mb-5">My Account</h2>
        <div class="mr-4">
          <img class="w-20 h-20 rounded-full" :src="user.profile_photo_url" width="80" height="80" alt="User upload" />
        </div>
      </div>
    </section>
    <section>
      <h3 class="text-xl leading-snug text-gray-800 font-bold mb-1">Public profile</h3>
      <div class="sm:flex space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
        <div class="sm:w-1/3">
          <label class="block text-sm font-medium mb-1" for="firstname">First name</label>
          <input v-model="user.firstname" id="firstname" class="form-input w-ful" :class="{'form-input-valid' : errorMsgFistName.length > 0}" type="text" />
          <p class="text-xs text-red-600">{{errorMsgFistName}}</p>
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
          <input v-model="user.email" id="email" class="form-input w-full" :class="{'form-input-valid' : errorMsgEmail.length > 0}" type="email" />
          <span class="text-xs text-red-600">{{errorMsgEmail}}</span>
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
import {computed} from "vue"

const athleteStore  = useAthleteStore();
const {user} = storeToRefs(athleteStore)
const bannerStore = useBannerStore()
const { addBanner } = bannerStore

console.log(user.value)
const errorMsgFistName = computed(() => {return user.value.firstname === "" ? "Firstname is required" : "" })
const errorMsgEmail = computed(() => {let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return user.value.email === null ? '' : user.value.email === "" ? "" : !re.test(user.value.email) ? "The input is not a vailid Email" : ""
})
interface Props {
  athleteProvider?: AthleteProvider,
}

const props = withDefaults(defineProps<Props>(), {
  athleteProvider: () => new AthleteProvider(),
})

function save() {
  if(errorMsgFistName.value.length > 0 || errorMsgEmail.value.length > 0) {
     addBanner({
      type: 'error',
      msg: `Please check validation message.`
    })
    return
  }
    props.athleteProvider.update(user.value)
    addBanner({
      type: 'success',
      msg: `Profile settings updated.`
    })
}
</script>