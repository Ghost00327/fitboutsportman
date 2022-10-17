import {ref} from 'vue'
import { defineStore } from 'pinia'
import type {Badge} from "@/model";

export const useBadgeStore = defineStore('badges', () => {
    const badges = ref<Badge[]>([])

    function add(badge: Badge) {
        badges.value = [...badges.value].concat(badge)
    }

    function deleteBadge(badge: Badge) {
        badges.value = badges.value.filter(value => value.id != badge.id)
    }

    return { badges, add, deleteBadge }
})