import ShowArticle from "./ShowArticle";

const ListArticles = () => {

    const articles = [

        {

            title: "Titre de l'article 1",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 1",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 1",
            isPublished: true,
            id: 1,

        },

        {

            title: "Titre de l'article 2",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 2",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 2",
            isPublished: false,
            id: 2,

        },

        {

            title: "Titre de l'article 3",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 3",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 3",
            isPublished: true,
            id: 3,

        },

    ];

    return (

        <div>
            {articles.map((article) => {
                if (article.isPublished) {
                    return (
                        <ShowArticle currentArticle={article} />
                    )
                }
            })
            }
        </div>
    )
}

export default ListArticles;