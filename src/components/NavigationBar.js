import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import logo1 from '../images/logo1.png';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 35%;
    top: 25%;
  }
  .logo {
    width: 300px;
    height: 80px;
  }
  .search-bar {
    width: 200px;
  }
  .home {
    padding-left: 840px !important;
    padding-top: 20px;
  }
  .about {
    padding-left: 20px !important;
    padding-top: 20px;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      {/* <img src={logo1}/> */}
      {/* <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form> */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><img src={logo1} className="logo"/></Nav.Item>
          <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="search-bar" />
      </Form>
          <Nav.Item><Nav.Link href="/" className="home">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about" className="about">About</Nav.Link></Nav.Item>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)