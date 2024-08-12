import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Book from "./components/Book";
import Collaboration from "./components/Collaboration";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Registration from "./components/Registration";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import SignIn from "./components/SignIn";
import SportsDetails from "./components/SportDetails";



const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />


        <Footer/>
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
