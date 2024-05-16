import "./features.css"; // Importe les styles CSS
import React from "react"; // Importe le module React

// Définition du composant  Features, qui prend quatre propriétés : icon, alt, title, description
const Features = ({ icon, alt, title, description }) => {
  console.log(icon); // Affiche l'icône dans la console à des fins de débogage

  // Rendu du composant
  return (
    // Balise figure représentant les fonctionnalités, avec un identifiant "features" et l'attribut loading pour le chargement différé
    <figure id="features" loading="lazy">
      {/* Balise img pour afficher l'icône de la fonctionnalité avec la source et le texte alternatif fournis en tant que propriétés */}
      <img src={icon} alt={alt} />
      {/* Balise figcaption pour le titre et la description de la fonctionnalité */}
      <figcaption>
        {/* Titre de la fonctionnalité */}
        <h3>{title}</h3>
        {/* Description de la fonctionnalité */}
        <p>{description}</p>
      </figcaption>
    </figure>
  );
};

export default Features; // Exporte le composant Features
