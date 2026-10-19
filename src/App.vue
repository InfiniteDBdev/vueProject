<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Accueil</RouterLink> |
      <RouterLink to="/todos">Liste</RouterLink> |
      <RouterLink to="/about">À propos</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>