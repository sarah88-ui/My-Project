import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './Favourites.css'
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const Favourites = () => {
  return (
    <div>
      <Nav/>
        <section className='boxs'>
              <div className='box'>
                  <h4><LocalAirportIcon /> Favourite places</h4>
                  <h2>In Summer</h2>
                  <ol>Santorini, Greece - Whitewashed buildings, blue-domed churches, and stunning sunsets over the Aegean Sea make it a dreamy summer escape.</ol>
                  <br />
                  <ol>Banff National Park, Canada - Turquoise lakes, mountain hikes, wildlife spotting, and fresh alpine air are perfect for outdoor lovers.</ol>
                  <br />
                  <ol>Barcelona, Spain - A mix of sandy beaches, lively nightlife, historic streets, and unique architecture creates a perfect city-and-sea combination.</ol>
                  <h2>In Spring</h2>
                  <ol>Kyoto, Japan - Famous for its cherry blossoms, peaceful temples, and traditional gardens, spring transforms the city into a soft pink wonderland.</ol>
                  <br />
                  <ol>Paris, France - Mild weather, blooming gardens, and café culture make spring one of the most romantic times to visit.</ol>
                  <br />
                  <ol>Marrakech, Morocco - Warm but comfortable temperatures, colorful markets, and blooming gardens make spring a perfect season to explore.</ol>
              </div>
              <div className='box'>
                  <h4><CreditCardIcon /> Pocket friendly</h4>
                  <h2>In Winter</h2>
                  <ol>Reykjavik, Iceland - See the Northern Lights, soak in geothermal hot springs, and explore snowy landscapes that feel otherworldly.</ol>
                  <br />
                  <ol>Swiss Alps, Switzerland - Perfect for skiing, snowboarding, cozy chalets, and breathtaking alpine scenery.</ol>
                  <br />
                  <ol>Vienna, Austria - Snowy streets, festive Christmas markets, classical music concerts, and elegant winter charm.</ol>
                  <h2>In Autumn</h2>
                  <ol>New England, United States - Famous for fiery fall foliage, scenic drives, cozy small towns, apple picking, and harvest festivals.</ol>
                  <br />
                  <ol>Tuscany, Italy - Harvest season in vineyards, golden countryside landscapes, mild weather, and delicious seasonal food make autumn perfect for exploring.</ol>
                  <br />
                  <ol>Canadian Rockies, Canada - Forests turn vivid shades of gold and red, lakes reflect the autumn colors, and wildlife is active before winter sets in.</ol>
              </div>
        </section>
      <Footer/>
    </div>
  )
}

export default Favourites
