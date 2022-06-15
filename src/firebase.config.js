import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD0dHiSVCWsuU6oCvxUhFm2fVO0dkLLbQI',
  authDomain: 'house-marketplace-react-27c6c.firebaseapp.com',
  projectId: 'house-marketplace-react-27c6c',
  storageBucket: 'house-marketplace-react-27c6c.appspot.com',
  messagingSenderId: '415740658212',
  appId: '1:415740658212:web:6b670aa8875252f3fa0eb1',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
