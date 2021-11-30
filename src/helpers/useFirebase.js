import { ref, onUnmounted } from 'vue'

import {useAuth} from "@vueuse/firebase"
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";


import {getFirestore} from "firebase/firestore";

import { firebaseConfig } from '~/config/firebase'

const firebaseapp = initializeApp(firebaseConfig)

const firebaseAuth = getAuth(firebaseapp);

const db = getFirestore()

const { isAuthenticated, user } = useAuth(firebaseAuth)

export const authentication = () => {
  const signIn = () => {
    alert(50); 
  signInWithPopup(firebaseAuth,new GoogleAuthProvider());
  }
  const sOut = () => signOut()
  return { signIn, sOut, isAuthenticated, user }
}

export const database = (movieId) => {
  const comments = ref([])

  const commentsCollection = db.collection('')
  const commentsQuery = commentsCollection
    .where('movieId', '==', movieId)
    .orderBy('createdAt')

  const unsubscribe = commentsQuery.onSnapshot((s) => {
    comments.value = s.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  })

  onUnmounted(unsubscribe)

  const addComment = async (text) => {
    if (!isAuthenticated.value) return
    const { uid, displayName } = user.value
    await commentsCollection.add({
      userName: displayName,
      userId: uid,
      movieId,
      text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }

  return { comments, addComment }
}
