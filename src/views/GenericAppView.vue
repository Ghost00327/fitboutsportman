<template>
  <div class="flex h-screen overflow-hidden">

    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main>

        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl absolute">
          <Banner2 v-for="banner in banners" :banner="banner"/>
        </div>

        <div class="px-4 sm:px-6 lg:px-8 py-10 w-full max-w-9xl mx-auto">

          <PageHeading :title="pageHeadingTitle">
            <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              <slot name="actions"></slot>
            </div>
          </PageHeading>

          <div v-if="grid" class="grid grid-cols-12 gap-6">
            <slot name="mainContent"></slot>
          </div>

          <slot v-if="!grid" name="mainContent"></slot>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeading from "@/partials/PageHeading.vue";
import Sidebar from "@/partials/Sidebar.vue";
import Header from "@/partials/Header.vue";
import Banner2 from "@/partials/Banner2.vue";
import {ref} from "vue";
import {storeToRefs} from "pinia";
import {useBannerStore} from "@/stores/banner";

const bannerStore = useBannerStore()
const { banners } = storeToRefs(bannerStore)

interface Props {
  pageHeadingTitle: string,
  grid?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  grid: () => true
})

const sidebarOpen = ref(true)
</script>