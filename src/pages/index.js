import React from 'react'
import { graphql } from 'gatsby'
import Bricks from '../components/bricks'
import Layout from '../components/layout'
import Featured from '../components/featured'

const IndexPage = (props) => {
  const { pageContext, data: { allMarkdownRemark: { edges } } } = props
  const featured = edges.filter(edge => edge.node.frontmatter.featured)
  const list = edges.filter(edge => edge.node.frontmatter.featured === null)

  console.log(pageContext);

  return (
    <Layout>
      {/* <Featured edges={featured} /> */}
      <Bricks edges={list} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          html
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title,
            date,
            featured,
            tags,
            type,
            thumbnail,
            url
          }
        }
      }
    }
  }
`