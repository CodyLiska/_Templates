<template>
  <div id="app">
    <NavBar />
    <main style="padding-bottom: 4rem;">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import { RouterView } from 'vue-router'
</script>
