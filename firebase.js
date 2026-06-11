import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import { 
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

/* 🔥 ATHORA FIREBASE CONFIG */
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "athora-46f98.firebaseapp.com",
  projectId: "athora-46f98",
  storageBucket: "athora-46f98.appspot.com",
  messagingSenderId: "292152203864",
  appId: "1:292152203864:web:84bf38cc7b38125e29c82d"
};

/* 🚀 INIT FIREBASE */
const app = initializeApp(firebaseConfig);

/* 🔐 AUTH */
export const auth = getAuth(app);

/* 🗄️ FIRESTORE DATABASE */
export const db = getFirestore(app);

/* =========================
   ATHORA HELPER FUNCTIONS
   ========================= */

/* 👤 REGISTER USER */
export async function registerUser(email, password, userData) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  const user = userCredential.user;

  // Save extra data to Firestore
  await setDoc(doc(db, "users", user.uid), {
    email: email,
    ...userData,
    createdAt: new Date()
  });

  return user;
}

/* 🔑 LOGIN USER */
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

/* 🚪 LOGOUT */
export function logoutUser() {
  return signOut(auth);
}

/* 👁️ AUTH STATE LISTENER */
export function observeUser(callback) {
  return onAuthStateChanged(auth, callback);
}

/* 🏃 ADD ATHLETE */
export async function addAthlete(data) {
  return await addDoc(collection(db, "athletes"), {
    ...data,
    createdAt: new Date()
  });
}

/* 📥 GET ALL ATHLETES */
export async function getAthletes() {
  const snapshot = await getDocs(collection(db, "athletes"));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

/* 🔍 GET SINGLE ATHLETE */
export async function getAthlete(id) {
  const ref = doc(db, "athletes", id);
  const snap = await getDoc(ref);

  if (snap.exists()) {
    return { id: snap.id, ...snap.data() };
  } else {
    return null;
  }
}

/* 📊 SEARCH ATHLETES */
export async function searchAthletes(field, value) {
  const q = query(collection(db, "athletes"), where(field, "==", value));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
