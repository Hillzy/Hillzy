import React from "react"
import headerCSS from "../../styles/header.module.css"

const NavSearch = props => {
  return (
    <div className={headerCSS.NavSearch}>
      <div className={headerCSS.searchWrapper}>
        <input
          className={headerCSS.search}
          type="text"
          id="search"
          placeholder="Search for products, brands and tags"
        />
        <input className={headerCSS.searchSubmit} type="submit" value=" " />
      </div>
    </div>
  )
}
export default NavSearch
