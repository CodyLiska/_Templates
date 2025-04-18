<template>
  <nav class="nav">
    <h1>My Club</h1>
    <ul class="nav-links">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/team">Team</RouterLink>
      </li>
      <li>
        <RouterLink to="/players">Players</RouterLink>
      </li>
      <li>
        <RouterLink to="/coaches">Coaches Portal</RouterLink>
      </li>
      <li>
        <RouterLink to="/parents">Parents Portal</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #333;
  color: white;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
}
</style>
