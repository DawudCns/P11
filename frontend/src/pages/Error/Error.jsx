import React from "react"; // Importe le module React
import { NavLink } from "react-router-dom"; // Importe le composant NavLink de react-router-dom pour créer des liens de navigation
import "./error.css"; // Importe les styles CSS
import exit from "./../../asset/exit.webp"; // Importe l'image d'icône de sortie

// Définition du composant  Error
const Error = () => {
  // Rendu du composant
  return (
    <main id="error">
      {" "}
      {/* Balise principale avec l'identifiant "error" */}
      <section>
        <h2>404</h2> {/* Titre indiquant le code d'erreur 404 */}
        <p>Page not found</p>{" "}
        {/* Paragraphe indiquant que la page n'a pas été trouvée */}
        <NavLink to="/">
          {" "}
          {/* Utilisation de NavLink pour créer un lien vers la page d'accueil */}
          <figure>
            <img src={exit} alt="exit" /> {/* Image d'icône de sortie  */}
            <figcaption>Back to home Page</figcaption>{" "}
            {/* Légende indiquant de revenir à la page d'accueil */}
          </figure>
        </NavLink>
      </section>
    </main>
  );
};

export default Error; // Exporte le composant Error
