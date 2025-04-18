<template>
  <div class="container my-5">
    <h2 class="mb-4">Players</h2>

    <!-- Add Player Form -->
    <div class="input-group mb-3">
      <input
        v-model="newPlayerName"
        type="text"
        class="form-control"
        placeholder="Enter player name"
        @keyup.enter="addPlayer"
      />
      <button class="btn btn-primary" @click="addPlayer">Add Player</button>
    </div>

    <!-- Player List -->
    <ul class="list-group">
      <li
        v-for="player in playerStore.players"
        :key="player.id"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <RouterLink :to="`/players/${player.id}`" class="text-decoration-none">
          {{ player.name }}
        </RouterLink>
        <button class="btn btn-sm btn-outline-danger" @click="removePlayer(player.id)">
          ❌
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePlayerStore } from '../stores/playerStore'

const playerStore = usePlayerStore()
const newPlayerName = ref('')

function addPlayer() {
  if (!newPlayerName.value.trim()) return
  playerStore.addPlayer(newPlayerName.value)
  newPlayerName.value = ''
}

function removePlayer(id) {
  playerStore.removePlayer(id)
}
</script>
