import React from 'react';
import { Link } from 'react-router-dom'
import '../css/signup.css';



class SignUp extends React.Component {

  state = {
    full_name: "",
    email: "",
    profile_pic: "",
    password: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleContinue = (e) => {
    e.preventDefault()
    this.props.signUpUser(this.state)
    .then(res => this.props.loginUser(this.state.email, this.state.password))
    .then(res => this.props.history.push("/notes"))
  }

  render() {
    return (
      <div className="main">
        <div className='signup'>
          <img className="logo" alt="" src="https://cdn.brandfolder.io/I6FML9WY/as/pgm3fv-4oc7fs-6mju3w/evernote-icon.png" />
          <h1>Endeavornote</h1>
          <p>Remember everything important</p>
          <form className="signupform" onSubmit={this.handleContinue}>
            <input name="full_name" onChange={this.handleChange} placeholder="Full Name" type="text" value={this.state.full_name} />
            <input name="email" onChange={this.handleChange} value={this.state.email} placeholder="EMAIL" type="text" />
            <input name="profile_pic" onChange={this.handleChange} value={this.state.profile_pic} placeholder="Add a URL" type="text" />
            <br />
            <input name="password" onChange={this.handleChange} value={this.state.password} placeholder="PASSWORD" type="password" />
            <br />
            <button type="submit">CONTINUE</button>
            <br />
            <br />
            <p>already have an account?</p>
            <Link to="/signin"><p>Sign In</p></Link>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp
