import React from "react"
import Layout from "../components/Layout"
import axios from "axios"
import { navigate } from "gatsby"

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      userNiceName: "",
      userEmail: "",
      loggedIn: false,
      loading: false,
      error: "",
    }
  }

  onFormSubmit = event => {
    event.preventDefault()

    const siteUrl = "https://checkout.hillzy.com.au"

    const loginData = {
      username: this.state.username,
      password: this.state.password,
    }

    this.setState({ loading: true }, () => {
      axios
        .post(`${siteUrl}/wp-json/jwt-auth/v1/token`, loginData)
        .then(res => {
          if (undefined === res.data.token) {
            this.setState({ error: res.data.message, loading: false })
            return
          }

          const { token, user_nicename, user_email } = res.data

          localStorage.setItem("token", token)
          localStorage.setItem("userName", user_nicename)

          this.setState({
            loading: false,
            token: token,
            userNiceName: user_nicename,
            userEmail: user_email,
            loggedIn: true,
          })
        })
        .catch(err => {
          this.setState({ error: err.response.data.message, loading: false })
        })
    })

    if (localStorage.getItem("token")) {
      navigate("/myaccount/", this.state.userEmail)
    }
  }

  handleOnChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { username, password, loggedIn } = this.state
    return (
      <Layout>
        <form onSubmit={this.onFormSubmit}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleOnChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleOnChange}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </Layout>
    )
  }
}
export default Login
