// créer un composant qui affiche les recettes de cocktails issues
// de l'API https://www.thecocktaildb.com/api/json/v1/1/random.php

import { useEffect, useState } from "react";
import ShowCocktail from "./ShowCocktail";


// composant doit faire un appel fetch
// stocker le résultat de l'appel dans une variable
// et on va l'afficher dans notre composant

const RandomCocktail = () => {


    const [cocktailRandomData, setCocktailRandomData] = useState(null);


    useEffect(() => {
        (async () => {
            const cocktailResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const cocktailRandomData = await cocktailResponse.json();
            setCocktailRandomData(cocktailRandomData.drinks[0]);
        })();
    }, []);



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

