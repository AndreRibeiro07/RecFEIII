import { useContext } from 'react'
import { ProdutoContext } from '../../context/Context'
import { CartPlus, CartDash } from 'react-bootstrap-icons'

const BtnAdicionar = ({product, id}) => {
    const {adicionarItem, carrinho, removerItem} = useContext(ProdutoContext)
    return (
        <>
        {carrinho.some(item=>item.id===id)
        ?
        (<button onClick={() => removerItem({...product})}>
            <CartDash color="black" size={16} />
        </button>)
        :
        (<button onClick={() => adicionarItem({...product})}>
            <CartPlus color="black" size={16} />
        </button>)

        }        
        </>
    )
}

export default BtnAdicionar