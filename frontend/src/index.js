import React from "react"; // Importe le module React

import { createRoot } from "react-dom/client"; // Importe la fonction createRoot de ReactDOM pour la création du point d'entrée racine
import App from "./App"; // Importe le composant principal de l'application depuis le fichier App.js
import "./index.css"; // Importe les styles CSS globaux pour l'application

const root = createRoot(document.getElementById("root")); // Crée le point d'entrée racine de l'application en récupérant l'élément HTML avec l'identifiant "root" du document
root.render(<App />); // Rend le composant App dans le point d'entrée racine de l'application
