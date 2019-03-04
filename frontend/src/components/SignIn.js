import React from 'react';
import { Link } from 'react-router-dom'
import '../css/signin.css';



class SignIn extends React.Component {
  state = {
    email: "",
    password_digest: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleContinue = (e) => {
    e.preventDefault()
    this.props.loginUser(this.state.email, this.state.password_digest)
    .then(res => {
      if(res) {
        this.props.history.push("/notes")
      }
    })
    .catch(err => {
    })
  }

  render() {
    return (
      <div className="main">
        <div className='signin'>
          <img className="logo" alt="" src="https://cdn.brandfolder.io/I6FML9WY/as/pgm3fv-4oc7fs-6mju3w/evernote-icon.png" />
          <h1>Endeavornote</h1>
          <p>Remember everything important</p>
          <form className="signinform" onSubmit={this.handleContinue}>
            <input onChange={this.handleChange} value={this.state.email} name="email" placeholder="EMAIL" type="text" />
            <br />
            <input onChange={this.handleChange} value={this.state.password_digest} name="password_digest" placeholder="PASSWORD" type="password" />
            <br />
            <button type="submit">CONTINUE</button>
            <br />
            <br />
            <p>need an account?</p>
            <Link to="/signup"><p>Sign up</p></Link>
          </form>
        </div>
      </div>
    )
  }
}

export default SignIn
