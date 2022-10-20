import {ref} from 'vue'
import { defineStore } from 'pinia'
import type {User} from "@/model";
import {AthleteProvider} from "@/providers/athleteProvider";


export const useAthleteStore = defineStore('athlete', () => {
    const user = ref<User>({
        city: "", firstname: "", id: 0, lastname: "", profile_photo_url: "", team: {id: 0, emoji: "", name: "", active: false}, email: ""
    })

    async function fetch(): Promise<User> {
        if (user.value.id === 0) {
            await new AthleteProvider().get().then(value => {
                user.value = value.data
            }).catch(value => {
                user.value.id = -1
            })
        }

        return user.value
    }

    return { user, fetch }
})