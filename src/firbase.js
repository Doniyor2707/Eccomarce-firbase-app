import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GithubAuthProvider } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASFqJp6MDezAA69aTRi2VTrGtHbXcYwJg",
  authDomain: "eccomarce-firbase-app.firebaseapp.com",
  projectId: "eccomarce-firbase-app",
  storageBucket: "eccomarce-firbase-app.appspot.com",
  messagingSenderId: "1089937048616",
  appId: "1:1089937048616:web:16b883f4c73c9de09c611d",
  measurementId: "G-C43P81C5L9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerGit = new GithubAuthProvider();

export { app, analytics, auth, provider, providerGit };
