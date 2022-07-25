import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <header className='header'>
            <div>
                <Link to='/'>Home</Link>
            </div>

            <nav className='navbar'>
                <ul>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Sign Up</Link>
                </ul>
            </nav>
        </header>
    </>
  );
}

export default Header;