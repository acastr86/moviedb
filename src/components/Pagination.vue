<template>
  <div class="flex items-center justify-center mb-4 space-x-2">
    <div>
      <button @click="prevPage" class="px-4 py-2 bg-white rounded">-</button>
    </div>
    <div>
      <p class="px-4 text-coolGray-200">Page {{ page }} of {{ pages }}</p>
    </div>
    <div>
      <button @click="nextPage" class="px-4 py-2 bg-white rounded">+</button>
    </div>
  </div>
</template>

<script setup>
  import { page, pages, nextPage, prevPage } from '~/helpers/useMovies'
</script>
