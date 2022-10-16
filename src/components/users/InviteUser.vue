<template>
  <ModalAction id="invite-user-modal" :modalOpen="modalOpen" @close-modal="$emit('close-modal')">
    <div class="text-center">
      <div class="text-sm mb-6">
        We will send an invitation email and recipient will be able to join your team straight away!
      </div>
      <!-- Submit form -->
      <form class="flex max-w-sm m-auto">
        <div class="grow mr-2">
          <label for="subscribe-form" class="sr-only">Leave your Email</label>
          <input id="subscribe-form" class="form-input w-full px-2 py-1" type="email" />
        </div>
        <button type="submit" class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">Invite</button>
      </form>
      <div class="text-xs text-gray-500 italic mt-3">
        We do not use email addresses from invitations for marketing purposes.
      </div>
    </div>
  </ModalAction>
</template>

<script setup lang="ts">
import {defineEmits} from "vue";
import {Teams} from "@/providers/teams";
import {useBannerStore} from "@/stores/banner";
import ModalAction from "@/partials/ModalAction.vue";

const emit = defineEmits(['close-modal'])

interface Props {
  teamsProvider?: Teams,
  modalOpen: boolean
}

const props = withDefaults(defineProps<Props>(), {
  teamsProvider: () => new Teams(),
})
const bannerStore = useBannerStore()
const { addBanner } = bannerStore

</script>