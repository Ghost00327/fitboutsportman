<template>
  <TeamModal
      :team="team"
      header="New Team"
      :modalOpen="newTeamModalOpen"
      @submit="createTeam(team)"
      @close="$emit('close-modal')"/>
</template>

<script setup lang="ts">
import TeamModal from "@/components/teams/TeamModal.vue";
import {ref, defineEmits} from "vue";
import type {Team} from "@/model";
import {Teams} from "@/providers/teams";
import {useTeamsStore} from "@/stores/teams";
import {useBannerStore} from "@/stores/banner";

const emit = defineEmits(['close-modal'])

interface Props {
  teamsProvider?: Teams,
  newTeamModalOpen: boolean
}

const props = withDefaults(defineProps<Props>(), {
  teamsProvider: () => new Teams(),
})
const bannerStore = useBannerStore()
const { addBanner } = bannerStore

const teamsStore = useTeamsStore()
const { add } = teamsStore
const team = ref<Team>({active: true, emoji: "", id: 0, name: ""})

function createTeam(newTeam: Team) {
  props.teamsProvider.create(newTeam)
  add(newTeam)
  addBanner({
    msg: `Team ${newTeam.name} added.`,
    type: "success"
  })
  emit('close-modal')
}
</script>