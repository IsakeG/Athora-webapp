"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [role, setRole] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Registration functionality coming soon!");
  };

  return (
    <main style={{ padding: "20px" }}>
      <h1>Create Athora Account</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <br />
          <input
            type="text"
            placeholder="Enter full name"
            required
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter email"
            required
          />
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            placeholder="Enter password"
            required
          />
        </div>

        <br />

        <div>
          <label>Role</label>
          <br />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          >
            <option value="">Select Role</option>
            <option value="athlete">Athlete</option>
            <option value="scout">Scout</option>
            <option value="coach">Coach</option>
            <option value="school">School</option>
            <option value="parent">Parent</option>
            <option value="fan">Fan</option>
          </select>
        </div>

        <br />

        {role === "athlete" && (
          <>
            <h3>Athlete Information</h3>

            <input
              type="text"
              placeholder="Sport"
            />

            <br />
            <br />

            <input
              type="text"
              placeholder="Club"
            />

            <br />
            <br />

            <input
              type="number"
              placeholder="Age"
            />

            <br />
            <br />
          </>
        )}

        <button type="submit">
          Create Account
        </button>
      </form>
    </main>
  );
}
