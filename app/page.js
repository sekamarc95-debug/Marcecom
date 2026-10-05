"use client";

import { useState } from "react";

export default function Home() {
  const [video, setVideo] = useState(null);
  const [caption, setCaption] = useState("");

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "white",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Marcecom
        </h1>

        <p style={{ color: "#666", fontSize: "18px" }}>
          Prépare et publie facilement tes vidéos sur TikTok.
        </p>

        <hr style={{ margin: "30px 0", border: "0", borderTop: "1px solid #eee" }} />

        <h2>Sélectionner une vidéo</h2>

        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files?.[0] || null)}
          style={{
            marginTop: "15px",
            padding: "12px",
            width: "100%",
          }}
        />

        {video && (
          <p style={{ marginTop: "15px", color: "green" }}>
            ✓ Vidéo sélectionnée : {video.name}
          </p>
        )}

        <h2 style={{ marginTop: "30px" }}>Légende TikTok</h2>

        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Écris la légende de ta vidéo..."
          rows={5}
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
            resize: "vertical",
          }}
        />

        <button
          disabled={!video}
          style={{
            marginTop: "25px",
            width: "100%",
            padding: "16px",
            border: "none",
            borderRadius: "10px",
            background: video ? "#000" : "#aaa",
            color: "white",
            fontSize: "18px",
            cursor: video ? "pointer" : "not-allowed",
          }}
          onClick={() =>
            alert(
              "La connexion TikTok sera configurée dans la prochaine étape."
            )
          }
        >
          Se connecter à TikTok et publier
        </button>
      </div>
    </main>
  );
}
