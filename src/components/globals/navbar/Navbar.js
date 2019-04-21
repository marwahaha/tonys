import React, { Component } from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import Navbaricons from './Navbaricons'
import styled from 'styled-components'

export default class Navbar extends Component {
  state={
    navbarOpen:false
  }
  handleNavbar = () =>{
    this.setState(()=>{
      return {navbarOpen:!this.setState.navbarOpen} 
        })
  }
  render() {
    return (
<<<<<<< HEAD:src/components/globals/navbar/Navbar.js
          <NavWrapper> 
           <NavbarHeader handleNavbar={this.handleNavbar} />

           <NavbarLinks navbarOpen={this.state.navbarOpen} />

          <Navbaricons />
         </NavWrapper>
=======
    <NavWrapper> 
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
      <Navbaricons />
    </NavWrapper>
>>>>>>> footer-gallery-business-logic-menu:src/components/Global/navbar/Navbar.js
    ) 
  }
}

const NavWrapper = styled.nav`
@media (min-width:768px){
  display:flex;
  align-items: center;
}
`

