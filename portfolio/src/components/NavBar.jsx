import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";


function NavBar() {

    const [showSidebar, setShowSidebar] = useState(false);
  
    const handleToggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };


  return (
    <>
    <Navbar bg="purple" variant="dark" className="sidebar">
      <Navbar.Toggle
        aria-controls="sidebar-menu"
        onClick={handleToggleSidebar}
        className="sidebar-toggle"
      />
      <Navbar.Collapse id="sidebar-menu" className="sidebar-menu">
        <Nav className="flex-column" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
          <Nav.Link href="/home" eventKey="/home" className="sidebar-item">
            <Image
              src="your-image-url-her"
              alt="gloria alori"
              roundedCircle
              width={50}
              height={50}
              className="sidebar-image"
            />
            <span className="sidebar-text">Gloria Alori</span>
          </Nav.Link>
          <Nav.Link href="/portfolio" eventKey="/portfolio" className="sidebar-item">
            <span className="sidebar-text">Portfolio</span>
          </Nav.Link>
          <Nav.Link href="/resume" eventKey="/resume" className="sidebar-item">
            <span className="sidebar-text">Resume</span>
          </Nav.Link>
          <Nav.Link href="your-github-url-here" eventKey="github" className="sidebar-item">
            <span className="sidebar-text">< FaGithub /></span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
}

export default NavBar;
