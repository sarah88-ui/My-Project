import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
import '../pages/About'
import '../pages/Favourites'
import '../pages/Forecast'
// import CloudIcon from '@mui/icons-material/Cloud';
import CloudQueueTwoToneIcon from '@mui/icons-material/CloudQueueTwoTone';

const nav = () => {
  return (
    <div>
       <nav>
        <div className='pgs'>
          <Link to='/' className='title'>Weather <CloudQueueTwoToneIcon/>pp</Link> 
          <Link to="/About" className="nav-link">SEASONS</Link>
          <Link to="/Favourites" className="nav-link">FAVOURITES</Link>
          <Link to="/Forecast" className="nav-link">FORECAST</Link>
        </div>
      </nav>
    </div>
  )
}

export default nav
