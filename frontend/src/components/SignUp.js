import React from 'react';
import { Link } from 'react-router-dom'
import '../css/signup.css';



class SignUp extends React.Component {
  render() {
    return (
      <div className="main">
        <div className='signup'>
          <img className="logo" alt="" src="https://cdn.brandfolder.io/I6FML9WY/as/pgm3fv-4oc7fs-6mju3w/evernote-icon.png" />
          <h1>Endeavornote</h1>
          <p>Remember everything important</p>
          <form className="signupform">
            <input name="email" placeholder="EMAIL" type="text" />
            <br />
            <input name="password" placeholder="PASSWORD" type="password" />
            <br />
            <button type="submit">CONTINUE</button>
            <br />
            <br />
            <p>already have an account?</p>
            <Link to="/signup"><p>Sign In</p></Link>
          </form>
        </div>
      </div>
    )
  }
}

export default SignUp
