import { useFetchAllCocktails } from "../lib/hooks/useFetchAllCocktails";
import { useFetchResearchCocktail } from "../lib/hooks/useFetchResearchCocktail";
import SearchForm from "./SearchForm";
import ShowResults from "./ShowResults";

const SearchCocktail = () => {

    // Créer un composant contenant un formulaire avec un input de type texte

    // Au submit du formulaire, faites un appel vers un appel vers www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita en remplaçant "margarita" par la valeur de la recherche

    // Dans votre composant affichez les cocktails trouvés sur l'api


    const [cocktailResultData, handleSubmit] = useFetchResearchCocktail();
    const cocktails = useFetchAllCocktails();


    return (
        <div>
            <SearchForm handleSubmit={handleSubmit} />
            <ShowResults cocktailResultData={cocktailResultData} />
        </div >


    );
}

export default SearchCocktail;