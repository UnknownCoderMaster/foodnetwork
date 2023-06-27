import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.scss';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand, Container, Button
} from 'reactstrap';

function App() {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
            <div className="Navbar">
            <Navbar color="white" light expand="md">
                <Container className="d-flex">
                <NavbarBrand href="/"><img src="icons/logo.svg" alt="logo"/></NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="text-warning" href="#">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">About us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Menu</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Features</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Contact us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                <button className="btn btn-warning">Booking Now</button>
                </Container>
            </Navbar>
        </div >
    );
}

export default App;