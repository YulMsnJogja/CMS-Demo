import React from "react"
import "../styles/bootstrap/bootstrap.min.css"
import { Container,Row,Col } from "react-bootstrap"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Features from "../components/Features"

export const PeoplePageTemplate = ({
  
    title,
    heading,
    subheading,
    subheading2,
    intro
  }) => (
      <div>
        <div>
        <h1>{title}</h1>
        </div>
        <div className="column is-12">
          <Features gridItems={intro.blurbs}/>
        </div>
          

      </div>
  )

  PeoplePageTemplate.propTypes = {
    
    title: PropTypes.string,
    subheading: PropTypes.string,
    subheading2: PropTypes.string,
    intro: PropTypes.shape({
      blurbs: PropTypes.array,
    }),
  }
  
  const PeoplePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
  
    return (
      <Layout>
        <PeoplePageTemplate
          title={frontmatter.title}
          subheading={frontmatter.subheading}
          subheading2={frontmatter.subheading2}
          intro={frontmatter.intro}
        />
      </Layout>
    )
  }
  
  PeoplePage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  }
  
  export default PeoplePage

  export const pageQuery = graphql`
  query PeoplePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "people-page" } }) {
      frontmatter {
        title
        subheading
        subheading2
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
  `