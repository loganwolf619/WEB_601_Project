import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo192.png';
//import styled from 'styled-components';
import {ButtonContainer} from "./Button";
import {ButtonLoad} from "./Button";
import {NavWrapper} from "./StyledNavBar";

export default class Navbar extends Component {
    render() {
        return (
          
<NavWrapper className="navbar navbar-expand-lg navbar-light bg-light">        
  <a class="navbar-brand" href="portfoliolist">Apex Shutterbug
  <Link to="/">
    <a class="navbar-brand" href="#">
        <img src={logo} width="30" height="30" className="navbarTag" alt="apexShutterbug"></img>
    </a>
    <ButtonLoad className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </ButtonLoad>
  </Link>
  </a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to="/" className="nav-item">
        <a className="nav-link" href="home">Home <span class="sr-only">(current)</span></a>
        </Link>
      </li>
      <div class="dropdown">
      <li className="nav-item dropdown">
    <Link to="/portfolio" className="nav-item dropdown">
        <ButtonLoad className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Portfolio
        </ButtonLoad>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="designs">Designs</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="illustrations">Illustrations</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="photos">Photos</a>
        </div>
        </Link>
      </li>
      </div>
      <li className="nav-item">
      <Link to="/about" className="nav-item">
        <a className="nav-link" href="about">About Us</a>
    </Link>
      </li>

      <li className="nav-item">
      <Link to="/contact" className="nav-item">
        <a className="nav-link" href="contact">Contact</a>
        </Link>
      </li>
      <li className="nav-item">
      <Link to="/message" className="nav-item">
        <a className="nav-link" href="message">Message</a>
        </Link>
      </li>
      <li className="nav-item">
      <Link to="/register" className="nav-item">
        <a className="nav-link" href="register">Register</a>
        </Link>
      </li>
      <li className="nav-item">
      <Link to="/cart" className="nav-item">
      <ButtonContainer>
          <span className="mr-2">
        <a className="fas fa-cart-plus"  href="#cart">
            My Cart
        </a>
        </span>
    </ButtonContainer>   
        </Link>
      </li>
    </ul>

    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <ButtonLoad className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</ButtonLoad>
    </form>
  </div>
</NavWrapper>
        )
    }
}
