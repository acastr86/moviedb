import { ref } from 'vue'
import axios from 'axios'

export const page = ref(1)
export const pages = ref(1)
export const movies = ref([])

const discover = axios.create({
  baseURL: import.meta.env.VITE_MOVIES_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_MOVIES_TOKEN}`,
  },
  params: {
    sort_by: 'popularity.desc',
  },
})

export const getMovies = async () => {
  const response = await discover('movie', { params: { page: page.value } })
  movies.value = response.data.results
  pages.value = response.data.total_pages
}

export const nextPage = () => {
  if (page.value < pages.value) {
    page.value++
    getMovies()
  }
}

export const prevPage = () => {
  if (page.value > 1) {
    page.value--
    getMovies()
  }
}

const imageBaseURL = 'https://image.tmdb.org/t/p'

export const posterBaseURL = `${imageBaseURL}/w200`
export const bgBaseURL = `${imageBaseURL}/original`
