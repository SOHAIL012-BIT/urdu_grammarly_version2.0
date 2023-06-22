import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { makeStyles } from "@material-ui/core/styles";
import logo from '../assets/images/urdu3.png'

import logoMain from '../assets/images/dashboardLogo.png'


const useStyles = makeStyles({

  navbarLables: {
    color: "white"

  }
});

function Header() {
  const classes = useStyles();

  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary" style={{
      marginTop: "5px",
      backgroundColor: "#ffffff",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      fontFamily: "'Google Sans', sans-serif",

    }} >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo} alt='Urdu Grammarly' style={{
            width: "15rem",
            height: "50px"
          }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"

            navbarScroll
          >
            <NavDropdown
              title="Why Urdu Grammarly"
              className="mx-lg-5"
              id="navbarScrollingDropdown"
              style={{ marginLeft: "20px" }}
            >

              <div className="col-6 ">
                <p style={{ width: 150 }} className="text-muted mt-4 px-lg-3">HOW IT WORKS</p>
                <NavDropdown.Item
                  href="/features"
                  className="fw-bold py-4 "
                >
                  Features
                </NavDropdown.Item>

                <p style={{ width: 150 }} className="text-muted mt-4 px-lg-3">WHO ARE WE</p>
                <NavDropdown.Item href="/About" className="fw-bold py-4">
                  About
                </NavDropdown.Item>
                {/* <NavDropdown.Item href="/contact" className="fw-bold py-4">
                  Contact
                </NavDropdown.Item> */}
                
              </div>
            </NavDropdown>
            <NavDropdown
              title="How to use Urdu Grammarly"
              className=" padding-left-minus"
              id="navbarScrollingDropdown"
            >

              <p className="text-muted mt-4 px-lg-3">HOW IT WORKS</p>

              <NavDropdown.Item href="/GrammarCheck" className="fw-bold mt-4">
                Grammar Check
              </NavDropdown.Item>
              <NavDropdown.Item href="/TextCorrection" className="fw-bold mt-4">
                Text correction
              </NavDropdown.Item>
              <NavDropdown.Item href="/WordSuggestion" className="fw-bold mt-4">
                Word Suggestion
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Education"
              className=" padding-left-minus"
              id="navbarScrollingDropdown"
              style={{ marginLeft: "60px" }}
              disabled
            >

              <p className="text-muted mt-4 px-lg-3" >Education</p>


              <NavDropdown.Item href="/grammer" className="fw-bold mt-4">
                For Students
              </NavDropdown.Item>
              <NavDropdown.Item href="/pun" className="fw-bold mt-4">
                For University
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form className="d-flex">
          <a href="/login">
            <Button variant="primary" style={{
              backgroundColor: '#1F243C',
              width: 200,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              fontFamily: "'Google Sans', sans-serif",
              boxShadow: "none",
              fontSize: "13pt",
              border: "transparent",
              padding: "10px 10px 10px 10px"
            }}
            
            >
              Get Started For Free
            </Button>
            </a>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;