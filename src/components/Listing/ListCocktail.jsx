import { useEffect, useState } from "react";
import { useFetchAllCocktails } from "../../lib/hooks/useFetchAllCocktails";
import ShowCocktail from "./SearchFunction/ShowCocktail";

const ListCocktail = () => {


    //fetch sur: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=

    const cocktailsData = useFetchAllCocktails();

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