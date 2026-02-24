import React from 'react'
import './Search.css'

function Search({ city, setCity, onSearch }) {
  return (
    <div className='search'>
      <input
        className='searchbar'
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  )
}

export default Search;
