import React from "react"
import Layout from "../components/Layout"

class MyAccount extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Layout>
        My Account:
        <p>Username: {localStorage.getItem("userName")}</p>
      </Layout>
    )
  }
}

export default MyAccount
