import ShowCocktail from "../Listing/ShowCocktail";


const ShowResults = (props) => {

    const cocktailResultData = props.cocktailResultData;
    console.log(cocktailResultData)

    return (
        <div className="cocktails">
            {cocktailResultData.map((item) => {
                console.log(item)
                return (
                    <div >
                        <ShowCocktail cocktail={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default ShowResults;