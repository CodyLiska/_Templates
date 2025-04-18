import { defineStore } from "pinia";
import { ref } from "vue";

export const usePlayerStore = defineStore("players", () => {
  // Initial player data with skills included
  const players = ref([
    {
      id: 1,
      name: "Alice Alice",
      number: 10,
      position: "Forward",
      stats: { goals: 3, assists: 2 },
      skills: {
        PSYCHOLOGY: { SelfConfidence: 3, Competitiveness: 4 },
        PSYCHICAL: { Agility: 5, Balance: 4 },
        SOCIAL_EMOTIONAL: { Listening: 5, Cooperation: 4 },
        TECHNICAL: { Dribbling: 4, Shooting: 3 },
      },
    },
    {
      id: 2,
      name: "Bob Bob",
      number: 7,
      position: "Midfielder",
      stats: { goals: 5, assists: 1 },
      skills: {
        PSYCHOLOGY: { SelfConfidence: 4, Competitiveness: 3 },
        PSYCHICAL: { Agility: 4, Balance: 5 },
        SOCIAL_EMOTIONAL: { Listening: 4, Cooperation: 3 },
        TECHNICAL: { Dribbling: 3, Shooting: 4 },
      },
    },
  ]);

  // Method to add a new player
  const addPlayer = (name) => {
    const newId = players.value.length
      ? Math.max(...players.value.map((p) => p.id)) + 1
      : 1;
    players.value.push({
      id: newId,
      name,
      stats: { goals: 0, assists: 0 },
      skills: {
        PSYCHOLOGY: { SelfConfidence: 1, Competitiveness: 1 },
        PSYCHICAL: { Agility: 1, Balance: 1 },
        SOCIAL_EMOTIONAL: { Listening: 1, Cooperation: 1 },
        TECHNICAL: { Dribbling: 1, Shooting: 1 },
      },
    });
  };

  // Method to remove a player by ID
  const removePlayer = (id) => {
    players.value = players.value.filter((p) => p.id !== id);
  };

  // Method to get a player by ID
  const getPlayerById = (id) => {
    return players.value.find((p) => p.id === id);
  };

  // Method to select a player for rating
  const selectPlayer = (id) => {
    const player = getPlayerById(id);
    if (player) {
      selectedPlayer.value = player;
    }
  };

  // Method to update player's skills
  const updatePlayerSkills = (id, newSkills) => {
    const player = getPlayerById(id);
    if (player) {
      // Loop through each category and skill
      for (const categoryName in newSkills) {
        if (player.skills[categoryName]) {
          for (const skillName in newSkills[categoryName]) {
            player.skills[categoryName][skillName] =
              newSkills[categoryName][skillName];
          }
        }
      }
    }
  };

  // Store the selected player
  const selectedPlayer = ref(null);

  return {
    players,
    addPlayer,
    removePlayer,
    getPlayerById,
    selectPlayer,
    updatePlayerSkills,
    selectedPlayer,
  };
});
