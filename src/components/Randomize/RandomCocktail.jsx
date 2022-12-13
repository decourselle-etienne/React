// créer un composant qui affiche les recettes de cocktails issues
// de l'API https://www.thecocktaildb.com/api/json/v1/1/random.php

import { useFetchRandomCocktail } from "../../lib/hooks/useFetchRandomCocktail";
import ShowCocktail from "./ShowCocktail";


// composant doit faire un appel fetch
// stocker le résultat de l'appel dans une variable
// et on va l'afficher dans notre composant

const RandomCocktail = () => {

    const cocktailRandomData = useFetchRandomCocktail()



    return (
        <div className="content">
            {cocktailRandomData ? (
                <ShowCocktail cocktail={cocktailRandomData} />
            ) : (
                <div>
                    <h1>Recette en cours de chargement</h1>
                </div>
            )}
        </div>
    );
};

export default RandomCocktail;

