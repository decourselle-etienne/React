
const ShowCocktail = (props) => {
    const cocktail = props.cocktail;

    console.log(cocktail)


    const getIngredient = () => {
        const ingredients = []
        for (let i = 1; i <= 15; i++) {
            const ingredient = cocktail[`strIngredient${i}`];
            if (ingredient) {
                ingredients.push(ingredient);
            }
        }
        return ingredients
    }

    return (
        <div className="cocktail">
            <h1>{cocktail.strDrink}</h1>
            <h3>{cocktail.strCategory}</h3>
            <img src={cocktail.strDrinkThumb}></img>
            <div className="ingredient">
                {getIngredient().map((ingredient) => {
                    return (
                        <p>{ingredient}</p>
                    )
                })}
            </div>

            <p>{cocktail.strInstructions}</p>
        </div>
    );
}

export default ShowCocktail;