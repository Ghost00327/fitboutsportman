<template>
  <UserCard v-for="user in users" :user="user"/>
</template>

<script setup lang="ts">
import UserCard from '@/components/users/UserCard.vue'
import {AthleteProvider} from "@/providers/athleteProvider";
import {onMounted, ref} from "vue";
import type {User} from "@/model";

const users = ref<User[]>([])
interface Props {
  athleteProvider?: AthleteProvider
}

const props = withDefaults(defineProps<Props>(), {
  athleteProvider: () => new AthleteProvider(),
})


onMounted(async () => {
  props.athleteProvider.getAll().then(resp => {
    users.value = resp.data
  })
})
</script>