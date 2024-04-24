import "../3_ Modèles/Template.css";
import Footer from "../../components/2_Structures/Footer";
import Header from "../../components/2_Structures/Header";
import PropTypes from "prop-types";

const Template = ({ children }) => {
  return (
    <div className="body">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

Template.propTypes = {
  children: PropTypes.node,
};

export default Template;
