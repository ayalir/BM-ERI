import React from "react";

// Ajouter les Google Fonts dans le <head> du composant
const Fonts = () => (
  <>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&family=Great+Vibes&display=swap" rel="stylesheet" />
  </>
);

export default function EriBMHome() {
  // Remplace ici avec l'URL de ton Google Form !
  const googleFormUrl = "https://forms.gle/Pc3o9o8HncpfkkaJ8";

  // HOOK pour lancer la musique au premier clic
  React.useEffect(() => {
    const playMusic = () => {
      const audio = document.getElementById('audio');
      if (audio) {
        audio.play();
        document.removeEventListener('click', playMusic);
      }
    };
    document.addEventListener('click', playMusic);
    return () => document.removeEventListener('click', playMusic);
  }, []);

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      fontFamily: "'Quicksand', 'Arial', sans-serif",
      overflow: "hidden",
      background: "#fff"
    }}>
      <Fonts />

      {/* Audio */}
      <audio id="audio" src="/music.mp3" preload="auto" />

      {/* Image Eri à gauche */}
      <img
        src="/Eri_BM.jpg"
        alt="Eri"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50vw",
          height: "100vh",
          objectFit: "cover",
          objectPosition: "left center",
          zIndex: 0,
          opacity: 0.22,
          pointerEvents: "none"
        }}
      />
      {/* Image Sefer Thora à droite */}
      <img
        src="/SeferThora.png"
        alt="Sefer Thora"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50vw",
          height: "100vh",
          objectFit: "cover",
          objectPosition: "right center",
          zIndex: 0,
          opacity: 0.22,
          pointerEvents: "none"
        }}
      />
      {/* Bloc de contenu */}
      <div style={{
        position: "relative",
        zIndex: 1,
        background: "rgba(255,255,255,0.92)",
        maxWidth: 460,
        margin: "40px auto",
        padding: 20,
        borderRadius: 18,
        boxShadow: "0 2px 28px rgba(0,0,0,0.03)"
      }}>
        {/* ...tout le reste de ton contenu... */}
        {/* RSVP bouton Google Form */}
        <div style={{ textAlign: "center", margin: "28px 0 0 0" }}>
          <h3 style={{ marginBottom: 10 }}>Réponse souhaitée dès réception</h3>
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#2155CD",
              color: "#fff",
              textDecoration: "none",
              border: "none",
              padding: "14px 30px",
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 18,
              cursor: "pointer",
              boxShadow: "0 1px 8px rgba(0,0,0,0.10)"
            }}
          >
            RSVP / Confirmer votre présence
          </a>
          <div style={{ fontSize: 12, marginTop: 8, color: "#555" }}>
            (Lien sécurisé, ouvert dans un nouvel onglet)
          </div>
        </div>
      </div>
    </div>
  );
}
