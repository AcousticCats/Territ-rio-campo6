// screens/LoginScreen.tsx
import React, { useState } from "react";

export default function LoginScreen() {
  const [congregation, setCongregation] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    alert("Login executado (placeholder).");
  }

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <label>Congregação</label>
        <input
          type="text"
          value={congregation}
          onChange={(e) => setCongregation(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            margin: "10px 0",
          }}
        />

        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            margin: "10px 0",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px 15px",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
