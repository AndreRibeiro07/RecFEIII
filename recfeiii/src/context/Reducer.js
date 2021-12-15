export const Reducer = (state, action) => {
    switch(action.type) {
        case 'ADICIONAR' :
        const conferirProdutos = state.filter(carrinho => (
            carrinho.id===action.payload.id
        ))
        if(!conferirProdutos.length){
            return [...state, action.payload]
        } 
        return state;
        case 'REMOVER' :
            return state.filter(e => e.id !==action.payload.id)
            default:
                return state;
    }
} 