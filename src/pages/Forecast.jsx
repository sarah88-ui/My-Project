import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import './Forecast.css'
import pageImg from '../assets/image/weather-6.jpg'

const Forecast = () => {
  return (
    <div>
     <Nav/>
     <img className='home-img' src={pageImg} alt="home-img" />
      <div className='p-tips'>
              <div className='p-box'>
                <div className='p-info'>
                    <div className='p-title'>
                      <h3>Yearly Forcast</h3>
                    </div>
                  <ol>Africa: Expect generally warm to hot conditions with strong seasonal rains in the tropics and dry heat in the north and south.</ol>
                  <ol>Asia: Mostly warm summers and varied rainfall patterns with monsoons in the south and milder conditions in temperate zones.</ol>
                  <ol>Europe: Usually mild to warm with wetter spells in the west and heatwaves possible in summer against a backdrop of overall warming.</ol>
                  <ol>North America: A mix of hot summers, cold northern winters, and variable rainfall patterns from drought to storms.</ol>
                  <ol>South America: Typically tropical warmth with heavy rain in the Amazon, dry conditions in parts of the south, and mild highland climates.</ol>
                  <ol>Australia: Mostly warm and dry overall, with wet northern monsoon seasons and hot inland conditions.</ol>
                  <ol>Antarctica: Still extremely cold year‑round with icy landscapes dominating, slightly milder near the coasts in summer.</ol>
                </div>
              </div>
              <div className='p-box'>
                <div className='p-info'>
                    <div className='p-title'>
                      <h3>Monthly Forcast</h3>
                    </div>
                  <ol>Africa: Warm with ongoing rains in central regions.</ol>
                  <ol>Asia: Winter persists north, spring begins in south.</ol>
                  <ol>Europe: Cold, occasional snow.</ol>
                  <ol>North America: Cold, snowy north; milder south.</ol>
                  <ol>South America: Wet in Amazon, hot in south.</ol>
                  <ol>Australia: Hot and humid in many areas.</ol>
                  <ol>Antarctica: Deep winter cold.</ol>
                </div>
              </div>
            </div>
            <div className='p-tips'>
              <div className='p-box'>
                <div className='p-info'>
                    <div className='p-title'>
                      <h3>weekly Forcast</h3>
                    </div>
                  <ol>Africa: Warm to hot this week with scattered showers in equatorial regions, mostly dry in northern deserts and southern grasslands.</ol>
                  <ol>Asia: Northern areas are cool and dry, southern and southeast regions may see tropical showers and humid conditions.</ol>
                  <ol>Europe: A mix of mild to warm days with some rain showers in the west and sunnier breaks in the east.</ol>
                  <ol>North America: Cooler temps and possible snow in far north, warm and humid with thunderstorms across central/eastern areas, dry and sunny in the southwest.</ol>
                  <ol>South America: Tropical rain likely in the Amazon, warm and pleasant in the southern temperate zones, coastal breezes along both oceans.</ol>
                  <ol>Australia: Warm in the north with possible showers, mild and sunny in the southeast, cooler inland nights.</ol>
                  <ol>Antarctica: Extremely cold, mostly dry with strong winds and persistent icy conditions.</ol>
                </div>
              </div>
              <div className='p-box'>
                <div className='p-info'>
                    <div className='p-title'>
                      <h3>Daily Forcast</h3>
                    </div>
                  <ol>Africa: Mostly warm to hot with scattered showers in equatorial and southern regions and generally dry conditions across northern deserts today.</ol>
                  <ol>Asia: Varied conditions — cool and dry in northern parts, warmer weather with isolated rain or fog in some central and southern regions.</ol>
                  <ol>Europe: Cooler than average with wintry conditions and pockets of snow or rain pushing across parts of the continent.</ol>
                  <ol>North America: Mixed weather — cold and snowy across much of the north/central regions, with milder and wetter conditions in the south.</ol>
                  <ol>South America: Warm and generally pleasant in many areas, with rain showers possible in the tropical regions.</ol>
                  <ol>Australia: Hot and dry in interior and southern regions today, with high fire danger in places experiencing heatwaves</ol>
                  <ol>Antarctica: Extremely cold and icy conditions continue with limited melting near coasts despite the long daylight.</ol>
                </div>
              </div>
            </div>
     <Footer/>
    </div>
  )
}

export default Forecast
