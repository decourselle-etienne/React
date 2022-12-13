import { useState } from "react";

export const useFetchResearchCocktail = () => {
    const [cocktailResultData, setCocktailResultData] = useState([]);
    let text = "vide";

    const handleSubmit = async (e) => {
        e.preventDefault()
        text = e.target.search.value;
        const research = e.target.search.value;
        const cocktailResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${research}`);
        const cocktailData = await cocktailResponse.json();
        setCocktailResultData(cocktailData.drinks);
    };

    return [cocktailResultData, handleSubmit, text]

}