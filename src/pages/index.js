import React from "react"

import Products from "../components/products/Products"
import Layout from "../components/layout"

import "../styles/resets.css"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="productsContainer">
          <div className="productFilter"></div>
          <Products></Products>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
