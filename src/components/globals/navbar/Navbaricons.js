import React, { Component } from 'react'
import { FaFacebook } from 'react-icons/fa'
import styled from 'styled-components'
import { styles } from '../../../utils'
export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: `https://www.facebook.com`,
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(item => (
          <a
            href={item.path}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    // margin-right: 2rem;
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()};
  }

  .facebook-icon {
    color: #c76327;
  }
  .icon:hover {
    color: ${styles.colors.mainYellow};
  }
  display: none;
  @media (min-width: 768px) {
    width: 10rem;
    display: flex;
    justify-content: space-around;
  }
`
