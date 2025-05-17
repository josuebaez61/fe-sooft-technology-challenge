// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJT-ruOvbzAcG3fooZUKjNXHZQ4VxIB1M",
  authDomain: "fe-sooft-technology-challenge.firebaseapp.com",
  projectId: "fe-sooft-technology-challenge",
  storageBucket: "fe-sooft-technology-challenge.firebasestorage.app",
  messagingSenderId: "896490811692",
  appId: "1:896490811692:web:f3fa79f562bb3a89f83c89",
  measurementId: "G-VYC5C6S4XL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics: ReturnType<typeof getAnalytics> | undefined = undefined;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

const db = getFirestore(app);

export { app, db, analytics };
