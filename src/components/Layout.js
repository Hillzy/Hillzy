import React from "react"

import Header from "./header/Header"

import LayoutCSS from "../styles/layout.module.css"

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Header></Header>
        <main className={LayoutCSS.children}>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
