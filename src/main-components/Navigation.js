import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


function Navigation(props){
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top LogoTop"
              alt="React Bootstrap logo"
            />{' '} Lucha Strategies
          </Navbar.Brand>
          <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {props.loginText} {props.logState} 
          </Navbar.Text>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
    
}

export default Navigation;