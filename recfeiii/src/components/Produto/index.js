import {Card, Container} from 'react-bootstrap'
import BtnAdicionar from '../Button'

const Produto = ({product, id}) => {
    return (
        <>
         <Container>
         <Card>
         <BtnAdicionar product = {product} id = {id} />
         <p>{product.title}</p>
         </Card>
         </Container>
        </>
    )
}

export default Produto
