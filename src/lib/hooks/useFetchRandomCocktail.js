import { useEffect, useState } from "react";

export const useFetchRandomCocktail = () => {

    const [cocktailRandomData, setCocktailRandomData] = useState(null);


    useEffect(() => {
        (async () => {
            const cocktailResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const cocktailRandomData = await cocktailResponse.json();
            setCocktailRandomData(cocktailRandomData.drinks[0]);
        })();
    }, []);

    return cocktailRandomData
}