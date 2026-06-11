
/* ---------------- STATE ---------------- */
let user = JSON.parse(localStorage.getItem("athora_user"));
let mode = localStorage.getItem("athora_mode") || "guest";

/* ---------------- GUEST MODE ---------------- */
function guestMode() {
  localStorage.setItem("athora_mode", "guest");
  window.location.href = "feed.html";
}

/* ---------------- SIGNUP ---------------- */
function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;
  const age = document.getElementById("age").value;

  const userData = {
    name,
    email,
    role,
    age
  };

  localStorage.setItem("athora_user", JSON.stringify(userData));
  localStorage.setItem("athora_mode", "user");

  alert("Account created");
  window.location.href = "feed.html";
}

/* ---------------- LOGIN (mock) ---------------- */
function login() {
  alert("Login success (demo)");
  localStorage.setItem("athora_mode", "user");
  window.location.href = "feed.html";
}

/* ---------------- FEED DATA ---------------- */
const videos = [
  {
    user: "jamal_brown",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "Football highlight"
  },
  {
    user: "sarah_sprint",
    url: "https://www.w3schools.com/html/movie.mp4",
    caption: "Sprint 11.2s"
  }
];

/* ---------------- FEED RENDER ---------------- */
function loadFeed() {
  const feed = document.getElementById("feed");

  if (mode === "guest") {
    feed.innerHTML = `
      <div class="locked">
        <h2>Guest Preview Mode</h2>
        <p>Sign up to unlock athlete content</p>
        <button class="btn" onclick="location.href='auth.html'">Join ATHORA</button>
      </div>
    `;
    return;
  }

  videos.forEach(v => {
    const div = document.createElement("div");
    div.className = "video";

    div.innerHTML = `
      <video autoplay muted loop src="${v.url}"></video>
      <div class="overlay">
        <h3>@${v.user}</h3>
        <p>${v.caption}</p>
      </div>
    `;

    feed.appendChild(div);
  });
}

/* ---------------- PROFILE LOCK ---------------- */
function loadProfile() {
  const profile = document.getElementById("profile");

  if (mode === "guest") {
    profile.innerHTML = `
      <div class="locked">
        <h2>Profile Locked</h2>
        <p>Create an account to view athlete stats</p>
        <button class="btn" onclick="location.href='auth.html'">Unlock</button>
      </div>
    `;
    return;
  }

  profile.innerHTML = `
    <div class="card">
      <h2>Athlete Profile</h2>
      <p>Stats visible here</p>
    </div>
  `;
}

/* ---------------- INIT ---------------- */
if (document.getElementById("feed")) loadFeed();
if (document.getElementById("profile")) loadProfile();
