import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyArNn1fOIo8wztQLA0DE6zZNohsrnzTn4U",
    authDomain: "hair-cut-recommendation.firebaseapp.com",
    projectId: "hair-cut-recommendation",
    storageBucket: "hair-cut-recommendation.appspot.com",
    messagingSenderId: "324924460737",
    appId: "1:324924460737:web:7722bea29cfbfcaa100e40"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth