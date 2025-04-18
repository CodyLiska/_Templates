<script setup>
import { useRoute } from 'vue-router'
import { usePlayerStore } from '../stores/playerStore'

const route = useRoute()
const playerStore = usePlayerStore()

const id = parseInt(route.params.id)
const player = playerStore.getPlayerById(id)
</script>

<template>
  <div class="container" v-if="player">
    <h2>{{ player.name }}'s Stats</h2>
    <p><strong>Goals:</strong> {{ player.stats.goals }}</p>
    <p><strong>Assists:</strong> {{ player.stats.assists }}</p>
    <RouterLink to="/players">← Back to Players</RouterLink>
  </div>
  <p v-else>Player not found</p>
</template>
