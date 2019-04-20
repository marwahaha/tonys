import React, { Component } from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import NavbarIcons from './Navbaricons'
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
          <NavWrapper> 
           <NavbarHeader handleNavbar={this.handleNavbar} />

           <NavbarLinks navbarOpen={this.state.navbarOpen} />

          <Navbaricons />
         </NavWrapper>
    ) 
  }
}

const NavWrapper = styled.nav`
@media (min-width:768px){
  display:flex;
  align-items: center;
}
`

