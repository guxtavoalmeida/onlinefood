import React from 'react';
import './prod.css';


function Produtos({ title, price, imageUrl, comment  }) {

    var  WthUrl = `http://api.whatsapp.com/send?phone=5538997351977&text=--- NOVO PEDIDO --- Produto: ${title}, Preço: R$${price}`

    return (
    <div className="produto">
        <img src={imageUrl} className="produto__image" />
        <div className="produto__info">
            <h1 className="produto__title">{title}</h1>
            <footer className="produto__footer">
            <div className="produto__comment">"{comment}"</div>
            <a href={WthUrl} target="_blank" className="produto__link">Fazer Pedido</a>
            </footer>
            <span className="produto__price">R$ {price}</span>
        </div>
    </div>
    )
}

export default Produtos;