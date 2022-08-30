import React from 'react'
import Header from '../components/Header'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Header />
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your email address'
              required
            />
            <input type='password' name='password' id='password' />
            <Link to={'/'}><button>Log In</button></Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login 