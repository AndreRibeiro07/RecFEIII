import React from 'react'
import { useContext } from 'react'
import {ProdutoContext} from '../../context/Context'
import { CartPlus, CartDash } from 'react-bootstrap-icons'
import Produto from '../../components/Produto'
import BotaoRemover from './BotaoRemover'

const Carrinho = ({product}) => {
    const {carrinho, removerItem} = useContext(ProdutoContext)
    console.log(carrinho)
    return (
        <div>
            <h1>Carrinho</h1>
            {carrinho.length ? (
        <>
        {carrinho.map((i) => 
            (
                <BotaoRemover key={i.id} id={i.id} title={i.title} price={i.price} image={i.image} description={i.description} category={i.category} rating={i.rating} />
            ))} 
        </>
        ):(
        <div> carrinho vazio </div>
        )}
        </div>
    )
}

export default Carrinho
