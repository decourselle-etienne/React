import Footer from "./Footer";
import Header from "./Header";
import './App.css';
//import ListCocktail from "./ListCocktail";
import FindCocktail from "./FindCocktail";



function App() {

  // créer un composant ListCocktail qui affiche tous les cocktails
  // refacto et appeler le composant ShowCocktail dans ListCocktail

  return (
    <div className="container">
      <Header />
      <FindCocktail />
      <Footer />
    </div>
  );
}

export default App;
