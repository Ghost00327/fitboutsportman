<template>
  <TeamModal
      header="Edit Team"
      :team="currentTeam"
      :modalOpen="modalOpen"
      @submit="editTeam(currentTeam)"
      @delete="deleteTeamm(currentTeam)"
      @close="modalOpen = false"/>

  <TeamCard v-for="team in summary" :data="team" @edit="openEditModal(team.team)"/>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {Teams} from "@/providers/teams";
import type {Team} from "@/model";
import TeamCard from "@/components/teams/TeamCard.vue";
import TeamModal from "@/components/teams/TeamModal.vue";
import {useTeamsStore} from "@/stores/teams";
import {storeToRefs} from "pinia";
import {useBannerStore} from "@/stores/banner";

export interface Props {
  teamsProvider?: Teams
}

const props = withDefaults(defineProps<Props>(), {
  teamsProvider: () => new Teams(),
})

const teamsStore = useTeamsStore()
const { summary } = storeToRefs(teamsStore)
const { addSummary, deleteTeam } = teamsStore

const bannerStore = useBannerStore()
const { addBanner } = bannerStore

const modalOpen = ref(false)
const currentTeam = ref<Team>({active: true, emoji: "", id: 0, name: ""})

function openEditModal(team: Team) {
  modalOpen.value = true
  currentTeam.value = team
}

function editTeam(team: Team) {
  props.teamsProvider.update(team)
  modalOpen.value = false
}

async function deleteTeamm(team: Team) {
  let response = await props.teamsProvider.delete(team);
  if (response.status != 200) {
    addBanner({
      type: 'error',
      msg: `Cannot remove ${team.name}`
    })
    return
  }
  deleteTeam(team)
  addBanner({
    type: 'info',
    msg: `Team ${team.name} sucesfully deleted.`
  })
  modalOpen.value = false
}


onMounted(async () => {
  props.teamsProvider.getSummary().then(resp => {
    addSummary(resp.data)
  })
})
</script>