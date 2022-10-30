// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {connectStorageEmulator, getStorage, ref} from 'firebase/storage'
import {connectFirestoreEmulator, getFirestore} from 'firebase/firestore'
import { getAuth,connectAuthEmulator } from 'firebase/auth'
import {connectFunctionsEmulator, getFunctions} from 'firebase/functions'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  measurementId: import.meta.env.VITE_measurementId,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId

}



// Initialize Firebase
export const app = initializeApp(firebaseConfig)
const functions = getFunctions(getApp())
// connectFunctionsEmulator(functions,"localhost",8080)
export const storage = getStorage(app)
// connectStorageEmulator(storage, "localhost", 9199);
export const db = getFirestore(app)
// connectFirestoreEmulator(db,"localhost",8080)
export const auth = getAuth(app)
// connectAuthEmulator(auth, "http://localhost:9099");
const analytics = getAnalytics(app)
 