<template>
  <NavBar />
  <Home v-if="isAuthenticated" />
  <EmptyHome v-else />
  <Footer />
</template>

<script setup>
  import { authentication } from '~/helpers/useFirebase'

  const { isAuthenticated } = authentication()
</script>
