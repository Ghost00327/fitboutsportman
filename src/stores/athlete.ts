import {ref} from 'vue'
import { defineStore } from 'pinia'
import type {Athlete} from "@/model";
import {AthleteProvider} from "@/providers/athleteProvider";


export const useAthleteStore = defineStore('athlete', () => {
    const athlete = ref<Athlete>({
        city: "", firstname: "", id: 0, lastname: "", profile_photo_url: "", team: {id: 0, emoji: "", name: "", active: false}, email: ""
    })

    function exists() {
        return athlete.value.id != 0
    }

    async function fetch(): Promise<Athlete> {
        if (!exists()) {
            athlete.value = (await new AthleteProvider().get()).data
        }

        return athlete.value
    }

    return { athlete, fetch, exists }
})