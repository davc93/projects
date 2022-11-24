// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import {connectStorageEmulator, getStorage, ref} from 'firebase/storage'
import {connectFirestoreEmulator, getFirestore} from 'firebase/firestore'
import { getAuth,connectAuthEmulator } from 'firebase/auth'
import {connectFunctionsEmulator, getFunctions} from 'firebase/functions'
import { config } from '../config'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: config.API_KEY,
  authDomain: 'davc93.firebaseapp.com',
  projectId: 'davc93',
  storageBucket: 'davc93.appspot.com',
  measurementId: 'G-Q13GH0X2RQ',
  messagingSenderId: '605943476916',
  appId: '1:605943476916:web:ab4c1cd630fb44c9229de1'

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
 