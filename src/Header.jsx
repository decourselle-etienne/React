const Header = () => {
    const displayTitle = true;
    const title = "Sup de Vinci";

    const menuItems = [
        {
            name: "Home",
            link: "/"
        },

        {
            name: "About",
            link: "/about"
        },

        {
            name: "Contact",
            link: "/contact"
        }

    ]

    // Consigne : créer un composant ou plusieur, appelez le depuis App.jsx
    // afficher uniquement les articles publiés en utilisant un .map() sur le tableau d'articles dans votre jsx
    // utiliser les bon éléments du DOM (h1, h2, p, img, a, ul, li, etc.)


    return (
        <header>
            {displayTitle && <h1>{title}</h1>}

            <nav>
                <ul>
                    {menuItems.map((item) => {
                        return (
                            <li>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </header>
    )
}

export default Header;