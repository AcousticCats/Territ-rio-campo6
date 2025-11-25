// screens/RegisterScreen.tsx
import React, { useState } from "react";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    alert("Cadastro enviado (placeholder).");
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Cadastro</h2>

      <form onSubmit={handleRegister}>
        <label>Nome</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ display: "block", width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <label>Código</label>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{ display: "block", width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <button
          type="submit"
          style={{ padding: "10px 15px", cursor: "pointer" }}
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
