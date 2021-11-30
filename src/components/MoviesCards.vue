<template>
  <div class="container grid gap-4 mx-auto my-4 text-center lg:grid-cols-2">
    <Card v-for="(movie, index) in movies" :key="index" :movie="movie" />
  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { getMovies, movies, page } from '~/helpers/useMovies'

  onMounted(() => {
    getMovies()
  })
</script>
