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

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      fontFamily: "'Quicksand', 'Arial', sans-serif",
      overflow: "hidden",
      background: "#fff"
    }}>
      <Fonts />

      {/* Image Eri à gauche */}
      <img
        src="/Eri_BM.jpg"
        alt="Eri"
        style={{
          position: "absolute",
          top: 0, left: 0,
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
          top: 0, right: 0,
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
        <div style={{
          fontSize: 18,
          fontWeight: 600,
          textAlign: "center",
          marginBottom: 8,
          color: "#2155CD" // couleur bleu royal assortie
     }}>
       <span>Mme Mr. Nicole &amp; William Zerbib</span><br />
       <span>Mme Mr. Sophie  &amp; Laurent Ainouze</span>
       <div style={{ marginTop: 2 }}>Ayal &amp; Lirone</div>
        </div>

        <div style={{ fontSize: 16, textAlign: "center", marginBottom: 18 }}>
          ont la joie de vous faire part de la Bar-Mitsva de <br /><br />
          <span style={{
            fontWeight: 700,
            fontSize: 28,
            fontFamily: "'Great Vibes', cursive",
            color: "#2155CD",
            letterSpacing: 2
          }}>
            Éri ארי
          </span>
        </div>
        {/* Bloc modifié qui inclut Synagogue + adresse après "Qui sera célébrée" */}
        <div style={{ textAlign: "center", marginBottom: 14 }}>
          Qui sera célébrée <br />
          <span
            style={{
              display: "block",
              fontFamily: "'Great Vibes', cursive",
              fontSize: 34,
              color: "#2155CD",
              fontWeight: "normal",
              margin: "10px 0 4px 0"
            }}
          >
            Synagogue Ozer Dalim
          </span>
          <span style={{ fontSize: 16, display: "block", marginBottom: 8 }}>
            8 imp. Dragon<br />13006 Marseille
          </span>
          <span style={{
            color: "#CFA235",
            fontWeight: 700,
            fontSize: 19,
            display: "block",
            margin: "10px 0"
          }}>
            Shabbat 03 Janvier 2026 / 14 Tevet 5786 à 8h30
          </span>
          <br />
          Lecture de la Paracha Vaye’hi ויחי<br />
          <small>L’Office sera suivi d’un apéritif</small>
        </div>
        {/* Mise des Téfilines */}
        <div style={{ textAlign: "center", marginBottom: 14 }}>
          <span
            style={{
              display: "block",
              fontFamily: "'Great Vibes', cursive",
              fontSize: 38,
              color: "#2155CD", // ou #fff si sur fond bleu
              fontWeight: "normal",
              marginBottom: 4
            }}
          >
            Mise des Téfilines
          </span>
          Dimanche 04 Janvier / 15 Tevet 5786 à 9h00<br />
          Un petit déjeuner suivra l’Office
        </div>
        {/* Bloc salle / fête AVEC EFFET LIGHT */}
        <div
          style={{
            textAlign: "center",
            margin: "28px 0 24px 0",
            padding: "18px 10px",
            background: "rgba(255,255,255,0.94)",
            borderRadius: 16,
            border: "2px solid #fff",
            boxShadow: "0 0 32px 8px #CFA23566, 0 2px 12px #2155CD22",
            transition: "box-shadow 0.3s"
          }}
        >
          <span
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: 28,
              color: "#2155CD",
              marginBottom: 6,
              display: "block"
            }}
          >
            Éri vous invite à faire la fête
          </span>
          <span
            style={{
              fontFamily: "'Quicksand', 'Arial', sans-serif",
              fontWeight: 600,
              fontSize: 17,
              color: "#CFA235",
              marginBottom: 4,
              display: "block"
            }}
          >
            Dimanche 04 Janvier 2026 à partir de 19h00
          </span>
          <span
            style={{
              fontSize: 16,
              color: "#222",
              fontWeight: 500,
              display: "block"
            }}
          >
            Salle Time Square<br />22 Rue Negresko<br />13008 Marseille
          </span>
        </div>
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
