import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyA-r-qHu00j0_CTH9hwmWhtdKoNF6hnSO8",
//   authDomain: "fir-25211.firebaseapp.com",
//   projectId: "fir-25211",
//   storageBucket: "fir-25211.appspot.com",
//   messagingSenderId: "807764382290",
//   appId: "1:807764382290:web:e44fa50c619bb6250d858b",
//   measurementId: "G-3S6HT981H2",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
