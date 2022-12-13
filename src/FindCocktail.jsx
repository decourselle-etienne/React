import { useState } from "react";
import ShowCocktail from "./ShowCocktail";

const FindCocktail = () => {

    // Créer un composant contenant un formulaire avec un input de type texte

    // Au submit du formulaire, faites un appel vers un appel vers www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita en remplaçant "margarita" par la valeur de la recherche

    // Dans votre composant affichez les cocktails trouvés sur l'api


    const [cocktailResultData, setCocktailResultData] = useState([]);

    const handleChange = async (e) => {
        const research = e.target.value;
        const cocktailResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${research}`);
        console.log(cocktailResponse)
        const cocktailData = await cocktailResponse.json();
        setCocktailResultData(cocktailData.drinks);
    };


    return (
        <form>
            <input type="text" placeholder="Recherche" onChange={(e) => handleChange(e)} />

            {cocktailResultData.map((cocktail) => {
                return (
                    <div >
                        <ShowCocktail cocktail={cocktail} />
                    </div>
                )
            })}

        </form>


    );
}

export default FindCocktail;