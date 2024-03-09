import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDDHYmwZTthb3SwujJx4f9O6y3e8DdLlzQ',
  authDomain: 'learnlingo-app.firebaseapp.com',
  databaseURL:
    'https://learnlingo-app-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learnlingo-app',
  storageBucket: 'learnlingo-app.appspot.com',
  messagingSenderId: '710065332200',
  appId: '1:710065332200:web:abf88361fe57f3bc020e5d',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);