import React from "react";
import "../Home/Home.css";
import iconchat from "../../assets/img/icon-chat.png";
import iconsecurity from "../../assets/img/icon-security.png";
import iconmoney from "../../assets/img/icon-money.png";
import Template from "../../components/3_ Modèles/Template";

function Home() {
  return (
    <Template>
      <main className="main bg-dark">
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Contenu Promu</h2>
            <p className="subtitle">Pas de frais.</p>
            <p className="subtitle">Pas de dépôt minimum.</p>
            <p className="subtitle">Aucune limite de retrait.</p>
            <p className="text">
              Ouvrez un compte épargne avec Argent Bank aujourd'hui !
            </p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Fonctionnalités</h2>
          <div className="feature-item">
            <img
              src={iconchat}
              alt="Icône de discussion"
              className="feature-icon"
            />
            <h3 className="feature-item-title">Vous êtes notre priorité n°1</h3>
            <p>
              Besoin de parler à un représentant ? Vous pouvez nous contacter
              via notre chat 24/7 ou par téléphone en moins de 5 minutes.
            </p>
          </div>
          <div className="feature-item">
            <img
              src={iconmoney}
              alt="Icône d'argent"
              className="feature-icon"
            />
            <h3 className="feature-item-title">
              Plus d'économies signifie plus de gains
            </h3>
            <p>
              Plus vous économisez avec nous, plus vos gains seront élevés !
            </p>
          </div>
          <div className="feature-item">
            <img
              src={iconsecurity}
              alt="Icône de sécurité"
              className="feature-icon"
            />
            <h3 className="feature-item-title">
              Une sécurité sur laquelle vous pouvez compter
            </h3>
            <p>
              Nous utilisons un chiffrement de pointe pour garantir que vos
              données et votre argent sont toujours en sécurité.
            </p>
          </div>
        </section>
      </main>
    </Template>
  );
}

export default Home;
