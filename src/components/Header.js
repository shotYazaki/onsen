import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap'

export default class Header extends React.Component{
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">北信州温泉</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#温泉">温泉</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="動かない" className="mr-sm-2" />
                        <Button vatiant="outline-info">#動かない</Button>
                    </Form>
                </Container>
            </Navbar>
        )
    }
}