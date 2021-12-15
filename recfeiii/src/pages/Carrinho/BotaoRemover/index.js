import React from 'react'
import {useContext} from 'react'
import { ProdutoContext } from '../../../context/Context'

const BotaoRemover = ({id, title, price, image, description, category, rating}) => {
    const {carrinho, removerItem}= useContext(ProdutoContext);
    return (
        <>
        <h1>{title}</h1>
        <span onClick={(()=>removerItem({id, title, price, image, description, category, rating}))}>Remover</span>
        </>
    )
}

export default BotaoRemover
