// créer un composant qui affiche les recettes de cocktails issues
// de l'API https://www.thecocktaildb.com/api/json/v1/1/random.php

import { useState } from "react";


// composant doit faire un appel fetch
// stocker le résultat de l'appel dans une variable
// et on va l'afficher dans notre composant

const RandomCocktail = () => {

    const [cocktailRandomData, setCocktailRandomData] = useState(null);

    const handleClick = async () => {
        const cocktailResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const cocktailRandomData = await cocktailResponse.json();

        setCocktailRandomData(cocktailRandomData.drinks[0]);
    };



    return (
        <div class="content">
            <button onClick={handleClick}>Afficher une recette random</button>
            {cocktailRandomData ? (
                <div class="cocktail">
                    <h1>{cocktailRandomData.strDrink}</h1>
                    <h3>{cocktailRandomData.strCategory}</h3>
                    <img src={cocktailRandomData.strDrinkThumb}></img>
                    <p>{cocktailRandomData.strInstructions}</p>
                </div>
            ) : (
                <div>
                    <h1>Recette en cours de chargement</h1>
                </div>
            )}
        </div>
    );
};

export default RandomCocktail;

