
const RandomCocktailButton = (props) => {

    const action = props.action;

    return (
        <button onClick={action}>Afficher une recette random</button>
    );
}

export default RandomCocktailButton;