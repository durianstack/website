import React from 'react'
import Image from '../components/image'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1 className="mb-4">Hello Universe</h1>
    <p className="leading-loose mb-4">Welcome to our new website, yep it's not much.</p>
    <div style={{ maxWidth: '300px' }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
