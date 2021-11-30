import axios from 'axios'

const likes = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})

export const add = async (like) => {
  await likes.post('/likes', { like })
}

export const countByObjectId = async (objectId) => {
  return await likes.get(`likes/count/object/${objectId}`)
}
