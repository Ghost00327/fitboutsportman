<template>
  <!-- Badges -->

  <section>
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl text-gray-800 font-bold">Badges</h2>
      <ActionButton @clicked="openNewModal" title="New Badge"/>
    </div>

    <!-- General -->
    <section>
      <h3 class="text-sm leading-snug text-gray-800 mb-1 mt-1">
        Badges are awards for users who collected certain number of points by completing activities. Check out <span class="font-semibold">leaderboard</span> to see per-user awards.
      </h3>
    </section>

    <BadgeModal
        :badgeModal="badgeModal"
        :modalOpen="modalOpen"
        @close="modalOpen = false"
        @delete="deleteBadge"
        @submit="submit"
    />

    <div class="grid grid-cols-12 gap-6 mt-5">
      <BadgeCard v-for="badge in badges" :badge="badge" @edit="openEditModal(badge)"/>
    </div>
  </section>
</template>


<script setup lang="ts">
import {onMounted, ref} from "vue";
import type {Badge} from "@/model";
import {BadgeProvider} from "@/providers/badge";
import BadgeCard from "@/partials/BadgeCard.vue";
import BadgeModal from "@/components/settings/badge/BadgeModal.vue";
import ActionButton from "@/partials/ActionButton.vue"
import {useBannerStore} from "@/stores/banner";

interface Props {
  badgeProvider?: BadgeProvider,
}

const props = withDefaults(defineProps<Props>(), {
  badgeProvider: () => new BadgeProvider(),
})

const modalOpen = ref(false)
const badges = ref<Badge[]>([])
const badgeModal = ref({
  badge: {description: "", id: 0, min_points: 0, name: "", emoji: ''},
  header: "Edit Badge"
})
const bannerStore = useBannerStore()
const { addBanner } = bannerStore

function openEditModal(badge: Badge) {
  badgeModal.value = {
    badge: badge,
    header: "Edit Badge"
  };
  modalOpen.value = true
}

function openNewModal() {
  badgeModal.value = {
    badge: {description: "", id: 0, min_points: 0, name: "", emoji: ''},
    header: "New Badge"
  }
  modalOpen.value = true
}

function deleteBadge() {
  const subject = badgeModal.value.badge
  badges.value = badges.value.filter(e => e.id != subject.id)
  props.badgeProvider.delete(subject)
  addBanner({
    type: 'success',
    msg: `Badge ${subject.name} deleted.`
  })
  modalOpen.value = false
}

function submit() {
  const subject = badgeModal.value.badge
  if (subject.id === 0) {
    badges.value = [subject, ...badges.value]
    props.badgeProvider.create(subject)
    addBanner({
      type: 'success',
      msg: `Badge ${subject.name} created.`
    })
  } else {
    props.badgeProvider.update(subject)
    addBanner({
      type: 'info',
      msg: `Badge ${subject.name} updated.`
    })
  }
  modalOpen.value = false
}

onMounted(async () => {
  badges.value = (await props.badgeProvider.getAll()).data.sort((n1,n2) => n1.min_points - n2.min_points);
})
</script>