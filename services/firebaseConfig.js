import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwt11uRYkFi7hpukU59eJwUNeOXd-ySwQ",
  authDomain: "travelapp-241c7.firebaseapp.com",
  projectId: "travelapp-241c7",
  storageBucket: "travelapp-241c7.appspot.com",
  messagingSenderId: "888334131410",
  appId: "1:888334131410:web:05db96aeec84a601b4cd0b",
  measurementId: "G-D538DDB4FR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export { auth, googleProvider, facebookProvider, twitterProvider };
