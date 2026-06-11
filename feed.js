import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    // not logged in → send to auth
    window.location.href = "auth.html";
  } else {
    console.log("Logged in as:", user.email);
  }
});
