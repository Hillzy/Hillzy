import React from "react"
import headerCSS from "../../styles/header.module.css"

const NavSearch = props => {
  return (
    <div className={headerCSS.NavSearch}>
      <div class={headerCSS.searchWrapper}>
        <input
          class={headerCSS.search}
          type="text"
          id="search"
          placeholder="Search for products, brands and tags"
        />
        <input class={headerCSS.searchSubmit} type="submit" value=" " />
      </div>
    </div>
  )
}
export default NavSearch
