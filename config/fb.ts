/* eslint-disable @typescript-eslint/no-unused-vars */

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA-uAmBgPT-fgZDoKapaCKrawKsOIgXXE4",
  authDomain: "digiset-8a296.firebaseapp.com",
  projectId: "digiset-8a296",
  storageBucket: "digiset-8a296.firebasestorage.app",
  messagingSenderId: "136515781927",
  appId: "1:136515781927:web:39a7d24cf9f44c0554d502",
  measurementId: "G-CFTHCSRQ72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);