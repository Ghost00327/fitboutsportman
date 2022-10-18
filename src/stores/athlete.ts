import {ref} from 'vue'
import { defineStore } from 'pinia'
import type {User} from "@/model";
import {AthleteProvider} from "@/providers/athleteProvider";


export const useAthleteStore = defineStore('athlete', () => {
    const athlete = ref<User>({
        city: "", firstname: "", id: 0, lastname: "", profile_photo_url: "", team: {id: 0, emoji: "", name: "", active: false}, email: ""
    })

    async function fetch(): Promise<User> {
        if (athlete.value.id === 0) {
            await new AthleteProvider().get().then(value => {
                athlete.value = value.data
            }).catch(value => {
                console.log(value)
                athlete.value.id = -1
            })
        }

        return athlete.value
    }

    return { athlete, fetch }
})