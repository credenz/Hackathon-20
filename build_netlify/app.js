import { getAuth } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
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
console.log("objecautht", auth);

auth.onAuthStateChanged((user) => {
  if (user) {
    console.log(user.email + " is logged in!");
    let loginNav = document.getElementById("login-home");
    loginNav.innerHTML = "Submission";
    loginNav.href = "submissions.html";
  } else {
    console.log("User is logged out!");
    document.getElementById("logout").innerHTML = "Login";
  }
});
