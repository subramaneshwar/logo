import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
function Navs() {
    return (
        <div className='bg-body-secondary' style={{backgroundColor:"#f1f1f1"}}>
            <Navbar expand="md" >
                <Container  >
                    <Navbar.Brand href="#" className='fs-1 ' >logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className='mx-auto gap-5 active '>
                            <Nav.Link className='fs-4 fw-bolder  text-primary' >Home</Nav.Link>
                            <Nav.Link className='fs-4 fw-bolder' >About</Nav.Link>
                            <Nav.Link className='fs-4 fw-bolder' >Contact</Nav.Link>

                        </Nav>
                        <Nav className='d-flex gap-4'>

                            <Nav.Link className='fs-3'>
                                <i class="bi bi-facebook"></i>
                                </Nav.Link>
                            <Nav.Link className='fs-3'>
                                <i class="bi bi-twitter"></i>
                                </Nav.Link>
                            <Nav.Link className='fs-3'>
                                <i class="bi bi-instagram"></i>
                                </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navs