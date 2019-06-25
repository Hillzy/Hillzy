import React from "react"

import headerCSS from "../../styles/header.module.css"

const TopHeader = props => {
  return (
    <div className={headerCSS.topHeader}>
      <div className={headerCSS.topContent}>
        <a href="#home">Contact us</a>
        <a href="#news">FAQ</a>
        <a href="#contact">Delivery</a>
      </div>
    </div>
  )
}
export default TopHeader
