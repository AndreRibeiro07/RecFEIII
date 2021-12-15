import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {Cart} from 'react-bootstrap-icons' 

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                    <Nav>
                        <Link to="/carrinho" type="button">
                            <Cart color ="white" size={30}>

                            </Cart>
                        </Link>
                    </Nav>
                </Container>

            </Navbar>
            
        </>
    )
}

export default Header;
