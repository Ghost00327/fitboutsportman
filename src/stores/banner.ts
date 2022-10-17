import {ref} from 'vue'
import { defineStore } from 'pinia'

export interface Banner {
    type: string
    msg: string
}

export const useBannerStore = defineStore('banners', () => {
    const banners = ref<Banner[]>([])

    function addBanner(banner: Banner) {
        banners.value = [banner, ...banners.value].slice(0, 2)
    }

    function removeBanner(msg: string) {
        banners.value = banners.value.filter(value => value.msg != msg)
    }

    return { banners, addBanner, removeBanner }
})