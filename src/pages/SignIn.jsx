import React from 'react'
import Header from '../components/Header'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <>
    <Header />
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              required
            />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your email address'
              required
            />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Choose your password'
            />
            <input
              type='password'
              name='password2'
              id='password2'
              placeholder='Confirm your password'
            />
            
            <Link to={'/'}><button>Create Your Account</button></Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default SignUp