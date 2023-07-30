import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

console.log("api key");
console.log(process.env.API_KEY);
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
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
