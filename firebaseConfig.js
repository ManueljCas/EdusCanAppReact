import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDy5vAX25GGrg9SyjlNixLRauVjMc0ErNk",
  authDomain: "eduscanapp.firebaseapp.com",
  projectId: "eduscanapp",
  storageBucket: "eduscanapp.appspot.com",
  messagingSenderId: "793266258032",
  appId: "1:793266258032:web:a897d45713cf84bf37f4b5",
  measurementId: "G-FMRR2TDGH5"
};

// Inicializa Firebase solo si no ha sido inicializado antes
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Verifica si ya se inicializó Auth para evitar inicializarlo múltiples veces
let auth;
if (!getAuth().app) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  auth = getAuth();
}

export { auth };
