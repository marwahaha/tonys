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
<<<<<<< HEAD
    margin-right: 2rem;
    font-size: 1.5rem;
=======
    // margin-right: 2rem;
    font-size: 1.3rem;
>>>>>>> pages-homeheader-banner-info-sections
    cursor: pointer;
    ${styles.transFunction()};
  }

  .facebook-icon {
<<<<<<< HEAD
    color: #d2aa5c;
  }
  .icon:hover {
    color: ${styles.colors.mainYellow2};
=======
    color: #c76327;
  }
  .icon:hover {
    color: ${styles.colors.mainYellow};
>>>>>>> pages-homeheader-banner-info-sections
  }
  display: none;
  @media (min-width: 768px) {
    width: 10rem;
    display: flex;
    justify-content: space-around;
  }
`
