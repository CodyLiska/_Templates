<template>
  <div class="coach-rating container">
    <!-- List of Players to Select -->
    <div class="row">
      <div class="col-md-4" v-for="player in players" :key="player.id">
        <div class="card mb-3" :class="{ 'border-primary': selectedPlayer?.id === player.id }"
          @click="selectPlayer(player.id)">
          <div class="card-body">
            <h5 class="card-title text-center fw-bold mb-3">{{ player.name }}</h5>

            <!-- Basic Player Stats -->
            <div class="basic-stats mb-3">
              <strong>Position:</strong> {{ player?.position || 'N/A' }} <br />
              <strong>Number:</strong> {{ player?.number || 'N/A' }} <br />
              <strong>Goals:</strong> {{ player?.stats?.goals || 0 }}
            </div>

            <!-- Psychology Skills -->
            <div class="skill-category mb-2">
              <strong class="category-title">PSYCHOLOGY:</strong>
              <ul class="skill-list">
                <li>Self Confidence: {{ player?.skills?.PSYCHOLOGY?.SelfConfidence || 'N/A' }}</li>
                <li>Competitiveness: {{ player?.skills?.PSYCHOLOGY?.Competitiveness || 'N/A' }}</li>
              </ul>
            </div>

            <!-- Physical Skills -->
            <div class="skill-category mb-2">
              <strong class="category-title">PHYSICAL:</strong>
              <ul class="skill-list">
                <li>Agility: {{ player?.skills?.PSYCHICAL?.Agility || 'N/A' }}</li>
                <li>Balance: {{ player?.skills?.PSYCHICAL?.Balance || 'N/A' }}</li>
              </ul>
            </div>

            <!-- Social/Emotional Skills -->
            <div class="skill-category mb-2">
              <strong class="category-title">SOCIAL/EMOTIONAL:</strong>
              <ul class="skill-list">
                <li>Listening: {{ player?.skills?.SOCIAL_EMOTIONAL?.Listening || 'N/A' }}</li>
                <li>Cooperation: {{ player?.skills?.SOCIAL_EMOTIONAL?.Cooperation || 'N/A' }}</li>
              </ul>
            </div>

            <!-- Technical Skills -->
            <div class="skill-category mb-2">
              <strong class="category-title">TECHNICAL:</strong>
              <ul class="skill-list">
                <li>Dribbling: {{ player?.skills?.TECHNICAL?.Dribbling || 'N/A' }}</li>
                <li>Shooting: {{ player?.skills?.TECHNICAL?.Shooting || 'N/A' }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Display the Selected Player's Skill Form -->
    <div v-if="selectedPlayer" class="player-skills-form mt-5">
      <h3>Update Skills for {{ selectedPlayer?.name }}</h3>
      <form @submit.prevent="updateSkills">
        <!-- Loop through each skill category -->
        <div v-for="(category, categoryName) in selectedPlayer?.skills || {}" :key="categoryName" class="mb-4">
          <h4>{{ categoryName }}</h4>
          <div class="row">
            <!-- Loop through each skill in the category -->
            <div class="col-md-6" v-for="([skillName, value], index) in Object.entries(category)" :key="index"
              :class="{ 'mb-3': true }">
              <label class="form-label">{{ skillName }}</label>
              <input type="number" class="form-control" v-model="newSkills[categoryName][skillName]" min="1" max="5"
                step="1" required />
            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Update Skills</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount, onMounted, watch } from 'vue';
import { usePlayerStore } from '../stores/playerStore';

// Get the player store
const playerStore = usePlayerStore();

// Get the list of players from the store
const players = ref(playerStore.players);

// Get the selected player from the store
const selectedPlayer = ref(null);

// Set up the form to hold new skill values for the selected player
const newSkills = ref({});

// Initialize component when mounted
onMounted(() => {
  // Reset selected player state
  selectedPlayer.value = playerStore.selectedPlayer;

  // Reset the form data
  resetForm();
});

// Reset the form data
const resetForm = () => {
  newSkills.value = {};
  if (selectedPlayer.value && selectedPlayer.value.skills) {
    for (const category in selectedPlayer.value.skills) {
      newSkills.value[category] = { ...selectedPlayer.value.skills[category] };
    }
  }
};

// When a player is selected, fetch their skills into the form
const selectPlayer = (id) => {
  try {
    playerStore.selectPlayer(id); // Update the store with the selected player
    selectedPlayer.value = playerStore.selectedPlayer;
    resetForm();
  } catch (error) {
    console.error("Error selecting player:", error);
  }
};

// Watch for changes in the selected player
watch(() => playerStore.selectedPlayer, (newVal) => {
  selectedPlayer.value = newVal;
  resetForm();
});

// Update the skills of the selected player
const updateSkills = () => {
  if (selectedPlayer.value && selectedPlayer.value.id) {
    playerStore.updatePlayerSkills(selectedPlayer.value.id, newSkills.value);
    alert('Skills updated successfully!');

    // Hide the form by clearing the selected player
    selectedPlayer.value = null;
    playerStore.selectPlayer(null); // also reset in the store, if needed
  }
};

// Reset selected player when component unmounts
onBeforeUnmount(() => {
  try {
    playerStore.selectPlayer(null); // Reset selected player in store
    selectedPlayer.value = null;
    newSkills.value = {};
  } catch (error) {
    console.error("Error during component unmount:", error);
  }
});
</script>

<style scoped>
.card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.card-body {
  padding: 20px;
}

.card-title {
  font-size: 1.25rem;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 8px;
}

.selected {
  background-color: #f0f0f0;
}

.player-skills-form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

button {
  margin-top: 20px;
  width: 100%;
}

.category-title {
  display: block;
  margin-bottom: 5px;
}

.skill-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 0;
}

.basic-stats {
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.skill-category {
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}

.skill-category:last-child {
  border-bottom: none;
}
</style>