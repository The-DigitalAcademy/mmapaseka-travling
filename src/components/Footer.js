import React from 'react'

const Footer = () => {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  return (

    <footer className='footer'>

        <div id='date'>
     
     Current date is {date}

     </div>

    </footer>
  )
}

export default Footer
