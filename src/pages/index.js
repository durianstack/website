import React from 'react'
import { graphql } from 'gatsby'
import Wall from '../components/wall'
import Layout from '../components/layout'
import Featured from '../components/featured'

const IndexPage = ({ data: { allMarkdownRemark: { edges } } }) => {
  const featured = edges.filter(edge => edge.node.frontmatter.featured)
  const list = edges.filter(edge => edge.node.frontmatter.featured === null)

  return <Layout>
    <div className="mx-auto container my-4">
      <Featured edges={featured} />
      <Wall edges={list} />
    </div>
  </Layout>
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