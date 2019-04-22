import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { styles } from '../../utils'
import { Link } from 'gatsby'
export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Let me tell you" title="My Misson" />
        <QuickInfoWrapper>
          <p className="text">
          My mission is simple: enhance and educate the palate with the freshest ingredients and flavors, while surprising and exciting each guest with personal care and service with Food as it should be. Food should taste good. It should feel good. It should do good things for you and the world around you.
          </p>
          <Link to="/about/" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2em;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
