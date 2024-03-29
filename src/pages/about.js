import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import img from '../images/bcg/aboutBcg.jpeg'
export default function about() {
  return (
    <Layout>
      <SEO title="About" />
      <PageHeader img={img}>
        <Banner title="about us" subtitle="All about Tony's Stone Baked Pizza" />
      </PageHeader>
    </Layout>
  )
}
