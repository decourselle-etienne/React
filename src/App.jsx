import Footer from "./components/Header_Footer/Footer";
import Header from "./components/Header_Footer/Header";
import SearchCocktail from "./components/SearchFunction/SearchCocktail";
import './style/App.css';



function App() {

  // créer un composant ListCocktail qui affiche tous les cocktails
  // refacto et appeler le composant ShowCocktail dans ListCocktail

  return (
    <div className="container">
      <Header />
      <SearchCocktail />
      <Footer />
    </div>
  );
}

export default App;
