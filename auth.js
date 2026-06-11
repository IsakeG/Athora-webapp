import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

/* ---------------- SIGN UP ---------------- */
window.signup = async function () {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  const age = document.getElementById("age").value;

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", userCred.user.uid), {
      name,
      email,
      role,
      age,
      createdAt: Date.now()
    });

    alert("ATHORA account created!");
    window.location.href = "feed.html";

  } catch (err) {
    alert(err.message);
  }
};

/* ---------------- LOGIN ---------------- */
window.login = async function () {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);

    alert("Welcome to ATHORA!");
    window.location.href = "feed.html";

  } catch (err) {
    alert(err.message);
  }
};
