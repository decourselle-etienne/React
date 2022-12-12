const ShowArticle = (props) => {

    // séparer le composant Articles en deux composants : un composant ListArticles et un composant ShowArticle
    // le composant ListArticles s'occupe uniquement de récupérer les articles sur une api (ici juste créer la variable articles, donc un fake appel d'api)
    // il faut la boucle sur tous les articles
    // pour chaque article, on utilise un composant ShowArticle dont l'unique rôle est d'afficher un seul article

    const article = props.currentArticle;

    return (
        <article key={article.id}>
            <h2>{article.title}</h2>
            <h3>{article.subtitle}</h3>
            <img src={article.image} alt={article.title}></img>
            <p>{article.content}</p>
            <p>{article.date.toString()}</p>
        </article>
    )
}

export default ShowArticle;