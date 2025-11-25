// screens/NotesScreen.tsx
import React, { useState } from "react";

export default function NotesScreen() {
  const [text, setText] = useState("");

  function handleSave() {
    alert("Anotações salvas (placeholder).");
  }

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h2>Anotações</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{
          width: "100%",
          height: "200px",
          padding: "10px",
          marginTop: "10px",
          fontSize: "16px",
        }}
      />

      <button
        onClick={handleSave}
        style={{
          padding: "10px 15px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Salvar
      </button>
    </div>
  );
}
