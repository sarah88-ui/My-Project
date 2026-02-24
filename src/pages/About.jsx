import React from 'react';
import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './About.css';
import SunnyIcon from '@mui/icons-material/Sunny';
import seasonImg from '../assets/image/weather-2.avif'

const About = () => {
    const [activeTab, setActiveTab] = useState("Europe");
  return (
    <div>
      <Nav/>
      <h1 className='season-title'>SEASONS OF THE YEAR</h1>
      <section className='navigation'>
        {["Europe", "N.America", "S.America", "Australia", "Asia", "Africa", "Antractica"].map(tab => (
          <button
            key={tab}
            className={`navi ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </section>

      {/* TAB CONTENT */}
      <section className='tab-content'>

        {/* Europe */}
        {activeTab === "Europe" && (
          <div>
            <h1 className='season-title'>Europe</h1>
            <section className='best-time'>
              <div className='box-1'>
                <div className='box-title'>
                  <SunnyIcon /> 
                  <h2>Summer</h2>
                </div>
                <h5>June - September</h5>
                <h4>In Europe, summer brings long sunny days, warm beaches, outdoor festivals, and vibrant city life across the continent.</h4>
              </div>

              <div className='box-2'>
                  <div className='box-title'>
                    <SunnyIcon /> 
                    <h2>Spring</h2>
                  </div>
                  <h5>March - June</h5>
                  <h4>In Europe, spring arrives with blooming flowers, mild temperatures, fresh green landscapes, and a feeling of renewal after winter.</h4>
              </div>
            </section>
            <section className='best-time'>
              <div className='box-3'>
                <div className='box-title'>
                  <SunnyIcon /> 
                  <h2>Autumn</h2>
                </div>
                <h5>Sept - December</h5>
                <h4>In Europe, autumn covers the forests in golden and red leaves, brings cooler air, harvest festivals, and peaceful countryside views.</h4>
              </div>

              <div className='box-4'>
                  <div className='box-title'>
                    <SunnyIcon /> 
                    <h2>Winter</h2>
                  </div>
                  <h5>December - March</h5>
                  <h4>In Europe, winter transforms many regions with snow, festive Christmas markets, shorter days, and cozy evenings indoors.</h4>
              </div>
            </section>
          </div>
        )}

        {/* N.America */}
        {activeTab === "N.America" && (
          <div>
            <h1 className='season-title'>North American</h1>
            <section className='best-time'>
              <div className='box-1'>
                <div className='box-title'>
                  <SunnyIcon /> 
                  <h2>Summer</h2>
                </div>
                <h5>June - September</h5>
                <h4>In North America, summer brings hot sunny days, crowded beaches, national park adventures, and lively outdoor festivals across cities and small towns alike.</h4>
              </div>

              <div className='box-2'>
                  <div className='box-title'>
                    <SunnyIcon /> 
                    <h2>Spring</h2>
                  </div>
                  <h5>March - June</h5>
                  <h4>In North America, spring fills the landscape with blooming flowers, flowing rivers, mild breezes, and a fresh sense of renewal after the cold season.</h4>
              </div>
            </section>
            <section className='best-time'>
              <div className='box-3'>
                <div className='box-title'>
                  <SunnyIcon /> 
                  <h2>Autumn</h2>
                </div>
                <h5>Sept - December</h5>
                <h4>In North America, autumn paints forests in brilliant shades of red, orange, and gold, brings crisp air, harvest celebrations, and falling leaves.</h4>
              </div>

              <div className='box-4'>
                  <div className='box-title'>
                    <SunnyIcon /> 
                    <h2>Winter</h2>
                  </div>
                  <h5>December - March</h5>
                  <h4>In North America, winter covers many regions with snow and ice, creates opportunities for skiing and skating, and invites cozy nights by the fire.</h4>
              </div>
            </section>
          </div>
        )}

        {/* S.America */}
        {activeTab === "S.America" && (
          <div>
            <h1 className='season-title'>South American</h1>
           <section className='best-time'>
              <div className='box-1'>
                <div className='box-title'>
                  <SunnyIcon /> 
                  <h2>Summer</h2>
                </div>
                <h5>December - March</h5>
                <h4>In South America, summer brings bright sunshine to many regions, lively beach days along the Atlantic and Pacific coasts, colorful festivals, and vibrant rainforest life thriving in the heat.</h4>
              </div>

              <div className='box-2'>
                  <div className='box-title'>
                    <SunnyIcon /> 
                    <h2>Spring</h2>
                  </div>
                  <h5>Sept - December</h5>
                  <h4>In South America, spring fills cities and countryside with blooming flowers, warmer breezes, fresh green landscapes, and a renewed energy as nature awakens.s</h4>
              </div>
            </section>
            <section className='best-time'>
              <div className='box-3'>
                <div className='box-title'>
                  <SunnyIcon /> 
                  <h2>Autumn</h2>
                </div>
                <h5>March - June</h5>
                <h4>In South America, autumn arrives with cooler temperatures in the south, golden vineyards and forests, harvest celebrations, and misty mornings across valleys and mountains.</h4>
              </div>

              <div className='box-4'>
                  <div className='box-title'>
                    <SunnyIcon /> 
                    <h2>Winter</h2>
                  </div>
                  <h5>June - September</h5>
                  <h4>In South America, winter brings snowy peaks to the Andes, cooler air in southern countries, mild tropical warmth near the equator, and cozy evenings in bustling cities.</h4>
              </div>
            </section>
          </div>
        )}

        {/* Australia */}
        {activeTab === "Australia" && (
          <div>
            <h1 className='season-title'>Australia</h1>
           <section className='best-time'>
              <div className='box-1'>
                <div className='box-title'>
                  <SunnyIcon /> 
                  <h2>Summer</h2>
                </div>
                <h5>December - March</h5>
                <h4>In Australia, summer brings hot sunny days, sparkling beaches filled with surfers and swimmers, outdoor barbecues under clear blue skies, and vibrant coastal festivals.</h4>
              </div>

              <div className='box-2'>
                  <div className='box-title'>
                    <SunnyIcon /> 
                    <h2>Spring</h2>
                  </div>
                  <h5>Sept - December</h5>
                  <h4>In Australia, spring arrives with blooming wildflowers, fresh green landscapes, gentle warming breezes, and longer days perfect for exploring the outdoors.</h4>
              </div>
            </section>
            <section className='best-time'>
              <div className='box-3'>
                <div className='box-title'>
                  <SunnyIcon /> 
                  <h2>Autumn</h2>
                </div>
                <h5>March - June</h5>
                <h4>In Australia, autumn brings mild temperatures, colorful leaves in cooler regions, harvest time in vineyards, and comfortable evenings with golden sunsets.</h4>
              </div>

              <div className='box-4'>
                  <div className='box-title'>
                    <SunnyIcon /> 
                    <h2>Winter</h2>
                  </div>
                  <h5>June - September</h5>
                  <h4>In Australia, winter offers cooler weather, snowy adventures in the alpine areas, crisp mornings in the cities, and cozy gatherings indoors during shorter days.</h4>
              </div>
            </section>
          </div>
        )}

        {/* Asia */}
        {activeTab === "Asia" && (
          <div>
            <h1 className='season-title'>Asia</h1>
            <section className='best-time'>
              <div className='box-1'>
                <div className='box-title'>
                  <SunnyIcon /> 
                  <h2>Summer</h2>
                </div>
                <h5>June - September</h5>
                <h4>In Asia, summer brings intense heat to many regions, powerful monsoon rains across South and Southeast Asia, bustling night markets filled with color and flavor, crowded beaches and mountain escapes, and long sunlit days stretching across vast landscapes.</h4>
              </div>

              <div className='box-2'>
                  <div className='box-title'>
                    <SunnyIcon /> 
                    <h2>Spring</h2>
                  </div>
                  <h5>March - June</h5>
                  <h4>In Asia, spring arrives with cherry blossoms in the east, mild breezes across temperate lands, fresh green rice fields in rural areas, vibrant cultural festivals celebrating renewal, and a gentle warmth that follows the fading winter cold.</h4>
              </div>
            </section>
            <section className='best-time'>
              <div className='box-3'>
                <div className='box-title'>
                  <SunnyIcon /> 
                  <h2>Autumn</h2>
                </div>
                <h5>Sept - December</h5>
                <h4>In Asia, autumn paints forests in gold and crimson in northern regions, brings cooler and clearer skies, harvest celebrations in farming communities, comfortable travel weather in many countries, and peaceful evenings under crisp air.</h4>
              </div>

              <div className='box-4'>
                  <div className='box-title'>
                    <SunnyIcon /> 
                    <h2>Winter</h2>
                  </div>
                  <h5>December - March</h5>
                  <h4>In Asia, winter covers northern areas with snow and icy winds, brings dry and cool conditions to many southern regions, fills mountain resorts with skiers, lights up cities with seasonal festivals, and creates cozy indoor moments during shorter days.</h4>
              </div>
            </section>
          </div>
        )}
         {/* Africa */}
         {activeTab === "Africa" && (
          <div>
            <h1 className='season-title'>Africa</h1>
            <section className='best-time'>
              <div className='box-1'>
                <div className='box-title'>
                  <SunnyIcon /> 
                  <h2>Dry Season</h2>
                </div>
                <h5>November - March</h5>
                <h4>In Africa, the dry season brings long sunny days, clear blue skies stretching over vast savannas, dusty roads and golden grasslands, animals gathering around shrinking waterholes, and cool star-filled nights in many regions.</h4>
              </div>

              <div className='box-4'>
                  <div className='box-title'>
                    <SunnyIcon /> 
                    <h2>Rainy Season</h2>
                  </div>
                  <h5>April - October</h5>
                  <h4>In Africa, the rainy season arrives with dramatic thunderstorms, heavy downpours that refresh the land, rivers swelling and waterfalls roaring to life, lush green landscapes replacing dry plains, and farming communities celebrating the return of nourishing rains.</h4>
              </div>
            </section>
          </div>
         )}
         {/* Antractica */}
         {activeTab === "Antractica" && (
          <div>
            <h1 className='season-title'>Antractica</h1>
            <section className='best-time'>
              <div className='box-1'>
                <div className='box-title'>
                  <SunnyIcon /> 
                  <h2>Summer</h2>
                </div>
                <h5>December - March</h5>
                <h4>In Antarctica, summer brings nearly 24 hours of daylight under the midnight sun, slightly milder temperatures that soften parts of the ice, melting sea ice along some coasts, busy research stations filled with scientists at work, and colonies of penguins raising their chicks along the shores.</h4>
              </div>

              <div className='box-4'>
                  <div className='box-title'>
                    <SunnyIcon /> 
                    <h2>Winter</h2>
                  </div>
                  <h5>June - September</h5>
                  <h4>In Antarctica, winter covers the continent in deep darkness for months, brings extreme cold and powerful icy winds, freezes the surrounding ocean into vast sheets of sea ice, leaves most research stations nearly empty, and creates one of the harshest and most remote environments on Earth.</h4>
              </div>
            </section>
          </div>
         )}
      </section>
      <img className='season-img' src={seasonImg} alt="img" />
      <Footer/>
    </div>
  )
}

export default About
