import React, { useState, useEffect } from "react"
import headerCSS from "../../styles/header.module.css"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Nav from "./Nav"
import NavSearch from "./NavSearch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons"

import cartIcon from "../../assets/images/shopping-bag.svg"

//const cartIcon = <FontAwesomeIcon icon={faShoppingBag} />
const favouritesIcon = <FontAwesomeIcon icon={faHeart} />
const userIcon = <FontAwesomeIcon icon={faUser} />

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

  const [accountLink, setLink] = useState(undefined)

  let accLink

  useEffect(() => {
    setLink(localStorage.getItem("token"))
  }, [])

  if (accountLink) {
    accLink = <Link to="/myaccount/">{userIcon}</Link>
  } else {
    accLink = <Link to="/login/">{userIcon}</Link>
  }

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
        <Nav></Nav>
        <NavSearch></NavSearch>
        <div className={headerCSS.rightContainer}>
          <div className={headerCSS.userContainer}>{accLink}</div>
          <div className={headerCSS.favouritesContainer}>{favouritesIcon}</div>
          <div className={headerCSS.cartContainer}>
            <img src={cartIcon} alt="bag" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default MidHeader
