// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import {
  getStorage,
  uploadBytes,
  ref,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgdr6ZuqbtUibJL3vpdIqSDef4D8EVAUI",
  authDomain: "ideathon-21.firebaseapp.com",
  projectId: "ideathon-21",
  storageBucket: "ideathon-21.appspot.com",
  messagingSenderId: "1021567881836",
  appId: "1:1021567881836:web:4727385314852437ddfe49",
  measurementId: "G-Z57TS1DJBW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(app);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const db = getFirestore();
const storage = getStorage();

document.getElementById("uploadButton").addEventListener("click", function (e) {
  e.preventDefault();
  try {
    const file = document.getElementById("file").files[0];
    const fileName = file.name;
    const storageRef = ref(storage, fileName);
    console.log("Fileref", storageRef);
    uploadBytes(storageRef, file).then((snapshot) => {
      alert("File uploaded successfully");
      console.log("Uploaded a blob or file!");
    });
  } catch (error) {
    console.log(error);
    alert("You need to login to upload PPT.");
    window.location.href = "./login.html";
  }
});
