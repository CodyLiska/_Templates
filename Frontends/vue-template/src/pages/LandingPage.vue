<template>
  <div class="container text-center py-5">
    <h1 class="mb-4">Welcome to My Club</h1>
    <div class="row">
      <div class="col-md-3 col-sm-6 mb-3" v-for="link in links" :key="link.to">
        <RouterLink class="btn btn-outline-primary w-100" :to="link.to">
          {{ link.label }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const links = [
  { label: 'Team', to: '/team' },
  { label: 'Players', to: '/players' },
  { label: 'Coaches Portal', to: '/coaches' },
  { label: 'Parents Portal', to: '/parents' },
]
</script>
