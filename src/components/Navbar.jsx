import React from 'react';
import styled from 'styled-components';
import logo from "../assets/logo.png";
const Navbar = ({isScrolled}) => {

    const links=[
        {name:"home", link: "/"},
        {name:"Tv Shows", link: "/tv"},
        {name:"Movies", link: "/movies"},
        {name:"My List", link: "/mylist"},
    ];

  return (
    <Container>
      <nav className={`flex ${isScrolled} ?"oscrolled" : ""`}>
        <div className='left flex a-center'>
            <div className='brand flex a-center j-center'>
                <img src={logo} alt='logo'/>
            </div>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
