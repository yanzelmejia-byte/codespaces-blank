//Import react
import React from 'react'

//Import images
import logo from './assets/Abstraction.png'
import weblogo from './assets/weblogo.png'
import google from './assets/google.png'
import facebook from './assets/facebook.png'
import lock from './assets/lock.png'

//CSS Import/Link
import './App.css';

//Declaring the app function
const App = () => {
  //HTML to be returned
  return (
    <div className='page'>
      {/*Left side of the screen*/}
      <div className='left'>
        <img src={weblogo} alt='logo' width='135px' height='117px'></img>
        <h3>Getting Started With VR Creation</h3>
        <img src={logo} alt='logo' width='630.49px' height='673.97px'></img>
      </div>

      {/*Right side of the screen*/}
      <div className='right'>
        <div>
          <select name="language" id="lang">
            <option value="En">English (UK)</option>
          </select>
        </div>
        

        <form>
          <h2>Create Account</h2>
          <div className='buttonRow'>
            <button><img src={google} width='23px' height='27px'></img>Sign up with Google</button>
            <button><img src={facebook} width='23px' height='27px'></img>Signup with Facebook</button>
          </div>
          <p className='or'>- OR -</p>
          <div className='input'>
            <input placeholder='Full Name' type='text' required></input>
            <input placeholder='Email' type='email' required></input>
            <div className='passwordBox'>
              <input placeholder='Password' type='password' required></input>
              <img src={lock} width='24px' height='24px'></img>
            </div>

          </div>

          <button className='Create'>Create Account</button>
          <p>Already have an account? <a>Log In</a></p>
        </form>
      </div>
    </div>
  )
}

export default App;