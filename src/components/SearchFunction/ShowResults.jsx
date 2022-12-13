import ShowCocktail from "../Listing/ShowCocktail";

const ShowResults = (props) => {

    const cocktailResultData = props.cocktailResultData;

    return (
        <div className="cocktails">
            {cocktailResultData.map((cocktail) => {
                return (
                    <div >
                        <ShowCocktail cocktail={cocktail} />
                    </div>
                )
            })}
        </div>
    )
}

export default ShowResults;