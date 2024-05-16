import React from "react"; // Importe le module React

import "./banner.css"; // Importe les styles CSS spécifiques pour ce composant

// Définition du composant Banner
const Banner = () => {
  // Rendu du composant
  return (
    // Balise figure représentant le banner, avec un identifiant "banner" et l'attribut loading pour le chargement différé
    <figure id="banner" loading="lazy">
      {/* Balise figcaption pour le contenu du banner */}
      <figcaption>
        {/* Titre du banner, uniquement pour les lecteurs d'écran (classe sr-only doit être définie dans le CSS pour cacher visuellement le titre) */}
        <h2 className="sr-only">Promoted Content</h2>
        {/* Sous-titres du banner */}
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        {/* Texte principal du banner */}
        <p className="text">Open a savings account with Argent Bank today!</p>
      </figcaption>
    </figure>
  );
};

export default Banner; // Exporte le composant Banner
