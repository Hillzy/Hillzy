import React from "react"
import headerCSS from "../../styles/header.module.css"

const Nav = () => {
  return (
    <div className={headerCSS.navContainer}>
      <div className={headerCSS.navBtn}>Women</div>
      <div className={headerCSS.diagonalSep2}>
        <svg className={headerCSS.svg}>
          <line x1="0" y1="100%" x2="100%" y2="0" />
        </svg>
      </div>
      <div className={headerCSS.navBtn}>Men</div>
    </div>
  )
}
export default Nav
