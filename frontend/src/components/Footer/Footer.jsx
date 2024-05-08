import "./footer.css"; // Importe les styles CSS

import React from "react"; // Importe le module React

// Définition du composant  Footer
const Footer = () => {
  // Obtient l'année en cours
  const currentYear = new Date().getFullYear();
  // Rendu du composant : une balise footer avec un identifiant "footer", contenant un paragraphe indiquant le droit d'auteur avec l'année actuelle et le nom de l'entreprise
  return (
    <footer id="footer">
      <p>Copyright {currentYear} Argent Bank</p>
    </footer>
  );
};

export default Footer; // Exporte le composant Footer
