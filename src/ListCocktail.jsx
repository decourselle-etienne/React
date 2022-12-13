import { useEffect, useState } from "react";
import ShowCocktail from "./ShowCocktail";

const ListCocktail = () => {


    //fetch sur: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=

    const [cocktailsData, setCocktailsData] = useState([]);

    useEffect(() => {
        (async () => {
            const cocktailResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
            const cocktailsData = await cocktailResponse.json();
            setCocktailsData(cocktailsData.drinks);
        })();
    }, []);

    return (
        <div className="cocktails">
            {cocktailsData.map((cocktail) => {
                return (
                    <div >
                        <ShowCocktail cocktail={cocktail} />
                    </div>
                )
            })}
        </div>
    )
}

export default ListCocktail;