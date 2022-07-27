import React from 'react'
import Traval from '../assets/Traval.avif'
import Boats2 from '../assets/Boats2.avif'
import image3 from '../assets/image-3.jpg'

const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>Now available in 46 countries!</h3>
      <div className='grid'>
        <div>
          <img src={Traval} alt='destination-1' />
          <h3>Traveling the world is a lifestyle</h3>
          <p>
          As i get closer to my travel goals, i will learn so much and develop my own way of doing things.
          </p>
        </div>

        <div>
          <img src={Boats2} alt='destination-2' />
          <h3>Seas</h3>
          <p>
          Many people enjoy travelling by sea. They say it is the most pleasant means of travelling. They mean travelling by an ocean liner, which combines comfort and speed.
          </p>
        </div>

        <div>
          <img src={image3} alt='destination-3' />
          <h3>Savour Hawaii</h3>
          <p>
          The world is full of people who love interacting. i get to make friends when i travel to new places and spend quality time with them.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destinations
