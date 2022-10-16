import {ref} from 'vue'
import type {Ref} from 'vue'
import { defineStore } from 'pinia'
import type {Athlete} from "@/model";
import {AthleteProvider} from "@/providers/athleteProvider";


export const useAthleteStore = defineStore('athlete', () => {
    const athlete = ref<Athlete | null>(null)

    function exists() {
        return athlete.value != null
    }

    async function fetch() {
        if (athlete.value == null) {
            athlete.value = (await new AthleteProvider().get()).data
        }

        return athlete.value
    }

    return { athlete, fetch, exists }
})