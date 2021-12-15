import {createContext, useEffect, useReducer, useContext} from 'react'
import {Reducer} from './Reducer'
export const ProdutoContext = createContext();

const ProdutoContextProvider = ({children}) =>{
    const[carrinho, dispatch] = useReducer(Reducer, [], () => {
        const localData = localStorage.getItem('carrinho');
        return localData? JSON.parse(localData):[];
    });
    useEffect(()=>{
        localStorage.setItem('carrinho', JSON.stringify(carrinho))
    },[carrinho])
    const adicionarItem = (carrinho) => {
        dispatch({type: 'ADICIONAR', payload:carrinho})
    }
    const removerItem = (carrinho) => {
        dispatch({type: 'REMOVER', payload:carrinho})
    } 
    return (
        <>
        <ProdutoContext.Provider value = {{carrinho, adicionarItem, removerItem}}>
            {children}
        </ProdutoContext.Provider>
        </>
    )
}

export default ProdutoContextProvider;
export const CarrinhoState = () => {
    return useContext(ProdutoContext)
}