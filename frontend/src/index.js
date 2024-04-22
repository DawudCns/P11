import React from "react";
import ReactDOM from "react-dom/client";
// Importation des composants et fonctions de react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  //React StrictMode pour activer un ensemble des vérifs et des comportements supplémentaires pour le développement
  <React.StrictMode>
    {/* Utilisation de BrowserRouter pour fournir un wrapper pour l'application avec un support de routage */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/utilisateur" element={<Utilisateur />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);