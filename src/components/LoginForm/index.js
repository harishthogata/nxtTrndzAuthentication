import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    submissionError: false,
    errorMsg: '',
  }

  onSubmitLogin = async event => {
    event.preventDetails()
    const {username, password} = this.state

    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.submitSuccess()
    } else {
      this.submitFailure()
    }
  }

  submitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  submitFailure = () =>
    this.setState({errorMsg: 'Username is not found', submissionError: true})

  renderUserNameInput = () => {
    const {userName} = this.state

    return (
      <>
        <label className="label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={userName}
          className="input"
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordInput = () => {
    const {password} = this.state

    return (
      <>
        <label className="label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={password}
          className="input"
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {submissionError, errorMsg} = this.state

    return (
      <div className="login-container">
        <img
          className="website-logo-sm"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        />
        <img
          className="website-login"
          alt="website login"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        />
        <form className="form-container" onSubmit={this.onSubmitLogin}>
          <img
            className="website-logo-bg"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          />
          <div className="input-container">{this.renderUserNameInput()}</div>
          <div className="input-container">{this.renderPasswordInput()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p className="error-msg">
            {submissionError === true && `*${errorMsg}`}
          </p>
        </form>
      </div>
    )
  }
}

export default LoginForm
