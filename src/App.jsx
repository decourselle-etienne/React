import Footer from "./components/Header_Footer/Footer";
import Header from "./components/Header_Footer/Header";
import './App.css';
//import ListCocktail from "./ListCocktail";
import SearchCocktail from "./SearchFunction/SearchCocktail";



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
