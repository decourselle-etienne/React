import { useEffect, useState } from "react";

export const useFetchAllCocktails = () => {
    const [cocktailsData, setCocktailsData] = useState([]);

    // useEffect(() => {
    (async () => {
        const cocktailResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
        const cocktailsData = await cocktailResponse.json();
        setCocktailsData(cocktailsData.drinks);
    })();
    // });

    return cocktailsData
}