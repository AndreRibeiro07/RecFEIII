import React from 'react'
import Produto from '../../components/Produto'
import useAxios from '../../Hooks/useAxios'

const Home = () => {
    const produtos = useAxios (`/products`)
    return (
        <>
         {produtos.map((product)=>{
             return(
                <Produto product={product} key={product.id} />
             )
         })}
        </>
    )
}

export default Home
// key={product.id}