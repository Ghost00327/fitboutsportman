import {ref} from 'vue'
import { defineStore } from 'pinia'
import type {Team, TeamSummary} from "@/model";


export const useTeamsStore = defineStore('teams', () => {
    const teams = ref<Team[]>([])
    const summary = ref<TeamSummary[]>([])

    function addSummary(teamSummary: TeamSummary[]) {
        teams.value = teams.value.concat(teamSummary.map(value => value.team))
        summary.value = teamSummary
    }

    function add(team: Team) {
        teams.value = teams.value.concat(team)
        summary.value = [...summary.value].concat({athletes: [], team: team})
    }

    function deleteTeam(team: Team) {
        teams.value = teams.value.filter(value => value.id != team.id)
        summary.value = summary.value.filter(value => value.team.id != team.id)
    }

    return { teams, summary, add, addSummary, deleteTeam }
})