import React from 'react'
import MetropolitanCity from '../assets/metropolitan city.avif'
import Paris from '../assets/paris.jpeg'
import Italy from '../assets/italy.avif'
import ShibuyaJapan from '../assets/shibuya, japan.avif'
import Tarviso from '../assets/tarviso.avif'
import London from '../assets/London.avif'


const Destinations = () => {
  return (
    <section className='destinations'>
      <div className='grid'>
        <div>
          <img src={Paris} alt='destination-1' />
          <h3>Paris</h3>
          <p>
          A city is so with beauty, even the least romantic are defenseless against its charms.
          </p>
        </div>

        <div>
          <img src={Italy} alt='destination-2' />
          <h3>Italy</h3>
          <p>
          Many people enjoy travelling by green tree and house. They say it is the most pleasant means of travelling.
          </p>
        </div>

        <div>
          <img src={MetropolitanCity} alt='destination-3' />
          <h3>Metropolitan city</h3>
          <p>
          The world is full of people who love travels. i get to make friends when i travel to new places and spend quality time with them.
          </p>
        </div>
      </div>

      <div className='grid'>
        <div>
          <img src={ShibuyaJapan} alt='destination-1' />
          <h3>Shibuya Japan</h3>
          <p>
          With so many attractions in Shibuya, you are going to have an incredible time and come back with amazing souvenirs from Japan.          </p>
        </div>

        <div>
          <img src={Tarviso} alt='destination-2' />
          <h3>Tarviso</h3>
          <p>
          On the last few days I experienced some of the other things you can do other than ski.          
          </p>
        </div>

        <div>
          <img src={London} alt='destination-3' />
          <h3>London</h3>
          <p>
          London, also known as Greater London, is one of nine regions of England and the top subdivision covering most of the city's metropolis.
          </p>
        </div>
      </div>
    </section>

    
  )
}

export default Destinations
