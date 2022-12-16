import './style/App.css';
import Home from "./components/Home";
import ListCocktail from "./components/Listing/ListCocktail";
import { HotModuleReplacementPlugin } from "webpack";
import Footer from "./components/headerFooter/Footer";
import Header from "./components/headerFooter/Header";
import SearchCocktail from "./components/SearchFunction/SearchCocktail";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  // créer un composant ListCocktail qui affiche tous les cocktails
  // refacto et appeler le composant ShowCocktail dans ListCocktail

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/list" element={<ListCocktail />} />


      </Routes>
    </BrowserRouter>

    // <div className="container">
    //   <Header />
    //   <SearchCocktail />
    //   <Footer />
    // </div>
  );
}

export default App;
