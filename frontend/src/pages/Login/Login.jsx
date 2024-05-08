import React, { useState } from "react"; // Importe React et useState depuis le module "react"

import { useNavigate } from "react-router-dom"; // Importe le hook useNavigate depuis react-router-dom pour la navigation entre les pages
import "./login.css"; // Importe les styles CSS

// Définition du composant Login
const Login = () => {
  const navigate = useNavigate(); // Initialise le hook useNavigate pour la navigation entre les pages

  // Déclaration des états pour le formulaire de connexion
  const [email, setEmail] = useState(""); // État pour l'adresse e-mail
  const [password, setPassword] = useState(""); // État pour le mot de passe
  const [rememberMe, setRememberMe] = useState(false); // État pour le bouton "Se souvenir de moi"
  const [isLoading, setIsLoading] = useState(false); // État pour gérer l'état de chargement lors de la soumission du formulaire

  // Fonction de gestion de la soumission du formulaire de connexion
  const handlelogIn = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire de recharge de la page

    if (!email || !password) {
      // Vérifie si les champs email et password sont vides
      alert("Please fill in all fields"); // Affiche une alerte si les champs sont vides
      return; // Sort de la fonction
    }

    setIsLoading(true); // Active l'état de chargement

    try {
      navigate("/profile"); // Redirige l'utilisateur vers la page de profil après avoir soumis le formulaire
    } catch (error) {
      setIsLoading(false); // Désactive l'état de chargement en cas d'erreur
    }
  };

  // Rendu du composant
  return (
    <main className="bg-dark">
      {" "}
      {/* Section principale avec une classe CSS pour le style */}
      <section id="login">
        {" "}
        {/* Section pour le formulaire de connexion avec un identifiant */}
        <i className="fa fa-user-circle sign-in-icon"></i>{" "}
        {/* Icône utilisateur */}
        <h2>Sign In</h2> {/* Titre du formulaire de connexion */}
        {/* Formulaire de connexion */}
        <form onSubmit={handlelogIn}>
          {" "}
          {/* Écoute l'événement de soumission du formulaire */}
          <fieldset>
            {" "}
            {/* Champ pour l'adresse e-mail */}
            <label htmlFor="username" className="sign">
              {" "}
              {/* Label pour l'adresse e-mail */}
              Username {/* Texte du label */}
            </label>
            <input
              type="text"
              id="username"
              autoComplete="username"
              value={email} // Attribue la valeur de l'e-mail à l'entrée
              onChange={(e) => setEmail(e.target.value)} // Met à jour l'état de l'e-mail lors de la saisie
            />
          </fieldset>
          <fieldset>
            {" "}
            {/* Champ pour le mot de passe */}
            <label htmlFor="password" className="sign">
              {" "}
              {/* Label pour le mot de passe */}
              Password {/* Texte du label */}
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password} // Attribue la valeur du mot de passe à l'entrée
              onChange={(e) => setPassword(e.target.value)} // Met à jour l'état du mot de passe lors de la saisie
            />
          </fieldset>
          <fieldset className="remember">
            {" "}
            {/* Champ pour le bouton "Se souvenir de moi" */}
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe} // Attribue l'état du bouton "Se souvenir de moi"
              onChange={(e) => setRememberMe(e.target.checked)} // Met à jour l'état du bouton "Se souvenir de moi" lorsqu'il est coché ou décoché
            />
            <label htmlFor="remember-me">Remember me</label>{" "}
            {/* Texte du bouton "Se souvenir de moi" */}
          </fieldset>
          <button type="submit" disabled={isLoading}>
            {" "}
            {/* Bouton de soumission du formulaire */}
            {isLoading ? "logIng In..." : "Sign In"}{" "}
            {/* Texte du bouton conditionnel en fonction de l'état de chargement */}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Login; // Exporte le composant Login
