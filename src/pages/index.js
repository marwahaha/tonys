<<<<<<< HEAD
import * as styles from './styles'
import { HomeHeader, PageHeader } from './Header'
import { Banner } from './Banner'
import { BannerButton, SectionButton } from './Button'
import { Section } from './Section'
import { Title } from './Title'
export {
  styles,
  HomeHeader,
  Banner,
  BannerButton,
  PageHeader,
  Section,
  Title,
  SectionButton,
}
=======
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="tony's" subtitle="Main street - Carrigaline, Co Cork Ireland">
        <Link to="/menu/" style={{ textDecoration: 'none' }}>
          <BannerButton style={{ margin: '2rem auto' }}>menu</BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
  </Layout>
)

export default IndexPage
>>>>>>> pages-homeheader-banner-info-sections
