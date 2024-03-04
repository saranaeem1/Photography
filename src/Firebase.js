import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBWHXXzgbwqa6e7buXMOwRTcrmS5CNSm7s",
  authDomain: "photography-website-26cc4.firebaseapp.com",
  databaseURL: "https://photography-website-26cc4-default-rtdb.firebaseio.com",
  projectId: "photography-website-26cc4",
  storageBucket: "photography-website-26cc4.appspot.com",
  messagingSenderId: "714642419572",
  appId: "1:714642419572:web:41ed720036a8f045bc4621",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;
