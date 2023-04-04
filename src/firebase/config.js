import 'firebase/storage';
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    initializeAuth,
    getReactNativePersistence
} from 'firebase/auth/react-native';


const firebaseConfig = {
  apiKey: "AIzaSyCwkNHvhNAElmovEEFk5OweGQ2TADDpYLA",
  authDomain: "reactnative-social-cec13.firebaseapp.com",
  projectId: "reactnative-social-cec13",
  storageBucket: "reactnative-social-cec13.appspot.com",
  messagingSenderId: "1081274844382",
  appId: "1:1081274844382:web:7fc74e16531c94cfecee4f",
  measurementId: "G-CCGZMC724T"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

