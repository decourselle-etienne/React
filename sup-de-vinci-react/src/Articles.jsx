const Articles = () => {

    const articles = [

        {

            title: "Titre de l'article 1",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 1",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 1",
            isPublished: true,

        },

        {

            title: "Titre de l'article 2",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 2",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 2",
            isPublished: false,

        },

        {

            title: "Titre de l'article 3",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 3",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 3",
            isPublished: true,

        },

    ];

    return (


        <div>
            {articles.map((item) => {
                if (item.isPublished) {
                    return (
                        <div>
                            <h2>{item.title}</h2>
                            <h3>{item.subtitle}</h3>
                            <img src={item.image} alt={item.title}></img>
                            <p>{item.content}</p>
                            <p>{ }</p>
                        </div>
                    )
                }
            })
            }
        </div>
    )
}

export default Articles;