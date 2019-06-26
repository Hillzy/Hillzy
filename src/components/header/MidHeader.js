import React from "react"
import headerCSS from "../../styles/header.module.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const MidHeader = props => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      logoImage: file(relativePath: { eq: "logo-trans.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={headerCSS.midHeader}>
      <div className={headerCSS.midContent}>
        <div className={headerCSS.logoContainer}>
          <div className={headerCSS.logoCenter}>
            <Link to="/">
              <Img fluid={data.logoImage.childImageSharp.fluid} alt="Hillzy" />
            </Link>
          </div>
        </div>
        <div className={headerCSS.diagonalSep}>
          <svg className={headerCSS.svg}>
            <line x1="0" y1="100%" x2="100%" y2="0" />
          </svg>
        </div>
        <div className={headerCSS.navContainer}></div>
      </div>
    </div>
  )
}
export default MidHeader
