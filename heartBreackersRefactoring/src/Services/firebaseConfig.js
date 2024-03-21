import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDXvNSaekLrUsHt-lZ2_W73UfSCWkulAqw",
  authDomain: "heartbreakers-2c4e9.firebaseapp.com",
  projectId: "heartbreakers-2c4e9",
  storageBucket: "heartbreakers-2c4e9.appspot.com",
  messagingSenderId: "1088033000295",
  appId: "1:1088033000295:web:f3b52f2c600cbc10bebdc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
