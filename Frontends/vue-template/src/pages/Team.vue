<template>
  <div class="container my-5">
    <h2 class="mb-4">Team Roster</h2>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      <div class="col" v-for="player in playerStore.players" :key="player.id">
        <div class="card h-100">
          <div class="card-body">
            <!-- Player Name centered -->
            <h5 class="card-title player-name text-center">{{ player.name }}</h5>

            <!-- Stats aligned left -->
            <div class="card-text">
              <p><strong>Number:</strong> {{ player.number }}</p>
              <p><strong>Position:</strong> {{ player.position }}</p>
              <p><strong>Goals:</strong> {{ player.stats.goals }}</p>
              <p><strong>Assists:</strong> {{ player.stats.assists }}</p>
            </div>
          </div>
          <div class="card-footer bg-transparent border-top-0">
            <RouterLink :to="`/players/${player.id}`" class="btn btn-outline-primary w-100">
              View Profile
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePlayerStore } from '../stores/playerStore'

const playerStore = usePlayerStore()
</script>

<style scoped>
.player-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #007bff;
  /* Bootstrap primary color */
  margin-bottom: 0.5rem;
}
</style>
