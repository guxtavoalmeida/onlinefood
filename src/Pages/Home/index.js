import Produtos from "../../components/Produtos/produtos";

import './style.css'

function Home() {

    const products = [
        {
            "id": 1,
            "title": "Hamburguer Artesanal Cheddar Burger",
            "price": 17.99,
            "imageUrl": "https://www.sabornamesa.com.br/media/k2/items/cache/b9ad772005653afce4d4bd46c2efe842_L.jpg",
            "comments": "Cheddar, Picanha, Cebola Caramelizada, Molho Barbecue",
        },
        {
            "id": 2,
            "title": "Hamburguer Artesanal Bacon",
            "price": 18.99,
            "imageUrl": "https://blog.eduk.com.br/wp-content/uploads/2016/08/hamburguer_shutterstock.jpg",
            "comments": "Picanha, Bacon, Alface, Tomate, Molhos",
        },
        {
            "id": 3,
            "title": "Hamburguer Especial",
            "price": 19.99,
            "imageUrl": "https://alineapproves.com/wp-content/uploads/2018/10/Ricks_Burger_CultMonsterBurger-1-1024x684.jpg",
            "comments": "Picanha, Bacon, Ovo, Alface, Tomate, Cebola Roxa, Molhos Especiais", 
        },
        {
            "id": 4,
            "title": "Coca-Cola",
            "price": 9.99,
            "imageUrl": "https://abcemcasa.vteximg.com.br/arquivos/ids/283221-1000-1000/REFRIG-PET-COCA-COLA-1-5L.jpg?v=637290884195400000",
            "comments": "2L",
        },
        {
            "id": 5,
            "title": "Coca-Cola Zero",
            "price": 5.99,
            "imageUrl": "https://madeleinebakery.com.br/wp-content/uploads/2020/01/coca-zero.jpg",
            "comments": "350ml",
        }
        ]


    return(
        <div className="home-container">
            <h1>CARDÁPIO</h1>
            {products.map((product) => (
                <Produtos title={product.title} price={product.price} imageUrl={product.imageUrl} comment={product.comments} />
            ))}
        </div>
    )
}

export default Home;