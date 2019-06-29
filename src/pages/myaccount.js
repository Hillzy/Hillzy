import React from "react"
import Layout from "../components/Layout"

class MyAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: undefined,
    }
  }

  componentDidMount() {
    this.setState({ userName: localStorage.getItem("userName") })
  }

  render() {
    return (
      <Layout>
        My Account:
        <p>{this.state.userName}</p>
      </Layout>
    )
  }
}

export default MyAccount
