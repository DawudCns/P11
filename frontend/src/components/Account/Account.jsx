import "./account.css";
import React from "react"; // Importe le module React.
import { useNavigate } from "react-router-dom"; // Importe la fonction useNavigate de react-router-dom pour la navigation dans l'application.

// Définit un composant Account. Il prend quatre propriétés : type, number, balance, balanceDescription.
const Account = ({ type, number, balance, balanceDescription }) => {
  const navigate = useNavigate(); // Utilise la fonction useNavigate pour obtenir une fonction de navigation.

  // Définit une fonction redirectToErrorPage qui utilise la fonction navigate pour rediriger l'utilisateur vers la page "/error" lorsqu'elle est appelée.
  const redirectToErrorPage = () => {
    navigate("/error");
  };

  // section contenant des informations sur le compte et un bouton pour afficher les transactions.
  return (
    <section id="account">
      <header>
        <h3>
          {type} - {number}
        </h3>{" "}
        {/* Affiche le type et le numéro du compte */}
        <b>{balance}</b> {/* Affiche le solde du compte */}
        <p>{balanceDescription}</p>{" "}
        {/* Affiche la description du solde du compte */}
      </header>
      <button onClick={redirectToErrorPage}>View transactions</button>{" "}
      {/* Un bouton pour afficher les transactions, cliquer dessus appelle redirectToErrorPage */}
    </section>
  );
};

export default Account; // Exporte le composant Account pour pouvoir l'utiliser ailleurs dans l'application.
