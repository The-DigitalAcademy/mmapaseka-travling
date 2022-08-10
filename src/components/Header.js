import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div>
        <Link className='links' to='/'>
          Home
        </Link>
      </div>

      <nav className='navbar'>
      </nav>
    </header>
  )
}

export default Header
