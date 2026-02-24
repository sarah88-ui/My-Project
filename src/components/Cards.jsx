import React from 'react'
import './Cards.css'
import london from '../assets/image/london-1.jpeg'
import newyork from '../assets/image/new york-1.jpeg'
import paris from '../assets/image/paris-1.jpeg'
import tokyo from '../assets/image/tokyo-1.jpeg'
import sydney from '../assets/image/sydney-1.jpeg'
import berlin from '../assets/image/berlin-2.jpeg'
import toronto from '../assets/image/toronto-1.jpeg'
import moscow from '../assets/image/moscow-1.jpeg'

const cards = () => {
  return (
    <div className='cards'>
        <div className='card-1'>
        <img className='city' src={london} alt="london" />
        <h1>London</h1>
        <p>London often has mild temperatures with frequent cloud cover and light rain throughout the year.</p>
        </div>
        <div className='card-1'>
        <img className='city' src={newyork} alt="new york" />
        <h1>New York</h1>
        <p>New York experiences hot, humid summers and cold, snowy winters with distinct seasonal changes.</p>
        </div>
        <div className='card-1'>
        <img className='city' src={paris} alt="paris" />
        <h1>Paris</h1>
        <p>Paris is the capital of France and is renowned for its art, fashion, and historic architecture.</p>
        </div>
        <div className='card-1'>
        <img className='city' src={tokyo} alt="tokyo" />
        <h1>Tokyo</h1>
        <p>Tokyo is the capital of Japan and one of the most populous metropolitan areas in the world.</p>
        </div>
        <div className='card-1'>
        <img className='city' src={sydney} alt="sydney" />
        <h1>Sydney</h1>
        <p>Sydney enjoys warm summers, mild winters, and plenty of sunshine along its coastal climate.</p>
        </div>
        <div className='card-1'>
        <img className='city' src={berlin} alt="berlin" />
        <h1>Berlin</h1>
        <p>Berlin has moderate seasonal weather, featuring warm summers and chilly winters with occasional snow.</p>
        </div>
        <div className='card-1'>
        <img className='city' src={toronto} alt="toronto" />
        <h1>Toronto</h1>
        <p>Toronto experiences warm, humid summers and cold, snowy winters influenced by nearby Lake Ontario.</p>
        </div>
        <div className='card-1'>
        <img className='city' src={moscow} alt="moscow" />
        <h1>Moscow</h1>
        <p>Moscow is known for its long, harsh winters and short, warm summers with significant temperature contrasts.</p>
        </div>
    </div>
  )
}

export default cards
