import { useFetchAllCocktails } from "../../lib/hooks/useFetchAllCocktails";
import ShowCocktail from "./ShowCocktail";

const ListCocktail = () => {

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