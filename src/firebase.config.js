import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA21D68x-pmBvch9HRG09X3obWuBOzGuVk',
  authDomain: 'house-marketplace-4b0ea.firebaseapp.com',
  projectId: 'house-marketplace-4b0ea',
  storageBucket: 'house-marketplace-4b0ea.appspot.com',
  messagingSenderId: '290577480119',
  appId: '1:290577480119:web:b49b9002ca9a7fe1069032',
  measurementId: 'G-DL3NRN910M',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
