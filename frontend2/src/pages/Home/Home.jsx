import React from "react";
import "./home.css";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import featuresData from "../../data/featuresData.json"; // Importe les données de fonctionnalités depuis le fichier JSON spécifié

const Home = () => {
  return (
    <main>
      <Banner /> {/* Affiche le composant Banner */}
      <section className="icon">
        {" "}
        {/* Section contenant des icônes de fonctionnalités */}
        <h2 className="sr-only">Features</h2>{" "}
        {/* Titre de section accessible uniquement pour les lecteurs d'écran */}
        {featuresData.map((feature, index) => (
          <Features
            key={index} // Propriété clé pour chaque élément itéré
            icon={feature.icon} // Propriété icône pour le composant Features
            alt={feature.alt} // Propriété texte alternatif pour le composant Features
            title={feature.title} // Propriété titre pour le composant Features
            description={feature.description} // Propriété description pour le composant Features
          />
        ))}
      </section>
    </main>
  );
};

export default Home; // Exporte le composant Home
