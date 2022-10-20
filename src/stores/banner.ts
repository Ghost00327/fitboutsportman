import {ref} from 'vue'
import { defineStore } from 'pinia'

export interface Banner {
    type: string
    msg: string
    title?: string
}

export const useBannerStore = defineStore('banners', () => {
    const banners = ref<Banner[]>([])

    function addBanner(banner: Banner) {
        banners.value = [banner]
    }

    function removeBanner(msg: string) {
        banners.value = banners.value.filter(value => value.msg != msg)
    }

    return { banners, addBanner, removeBanner }
})