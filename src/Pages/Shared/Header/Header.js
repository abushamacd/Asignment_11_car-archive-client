import React from "react";
import logo from "../../../images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";

const Header = () => {
  // Get user for conditinal randering
  const [user] = useAuthState(auth);

  // Handle sign out
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img height={50} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            {user ? (
              <Nav.Link as={Link} to="/manage">
                Manage Items
              </Nav.Link>
            ) : (
              <></>
            )}
            {user ? (
              <Nav.Link as={Link} to="/add">
                Add Item
              </Nav.Link>
            ) : (
              <></>
            )}
            {user ? (
              <Nav.Link as={Link} to="/myitem">
                My Items
              </Nav.Link>
            ) : (
              <></>
            )}
          </Nav>
          <Nav>
            {/* Conditinal randering */}
            {user ? (
              <button className="btn" onClick={handleSignOut}>
                Log Out <FontAwesomeIcon icon={faSignOutAlt} />
              </button>
            ) : (
              <Nav.Link eventKey={2} as={Link} to="/login">
                Login <FontAwesomeIcon icon={faSignInAlt} />
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
