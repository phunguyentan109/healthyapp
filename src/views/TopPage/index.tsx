import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './_style.scss'
import bg from 'assets/images/products/d01.jpg'
import knife from 'assets/images/icon_knife.png'
import cup from 'assets/images/icon_cup.png'
import { dishes } from './samples'
import LineChart from '../../components/LineChart'
import PieChart from './components/PieChart'
import ReturnTop from '../../components/ReturnTop/ReturnTop'

function TopPage() {
  return (
    <>
      <Header />
      <div className='topPage'>
        <div className='statistic'>
          <div className='circleWrapper' style={{ backgroundImage: `url(${bg}` }}>
            <PieChart />
          </div>
          <div className='chart'>
            <LineChart bg='darker' height={250} />
          </div>
        </div>
        <div className='meals'>
          <div>
            <img src={knife} alt='' />
            <p>Morning</p>
          </div>

          <div>
            <img src={knife} alt='' />
            <p>Lunch</p>
          </div>

          <div>
            <img src={knife} alt='' />
            <p>Dinner</p>
          </div>

          <div>
            <img src={cup} alt='' />
            <p>Snack</p>
          </div>
        </div>

        <div className='dishes'>
          {dishes.map((d, i) => (
            <div key={i}>
              <div className='imgWrapper'>
                <img src={d.img} alt='' />
                <div>{d.time}</div>
              </div>
            </div>
          ))}
        </div>

        <button className='moreBtn'>コラムをもっと見る</button>
      </div>

      <ReturnTop />

      <Footer />
    </>
  )
}

export default TopPage
