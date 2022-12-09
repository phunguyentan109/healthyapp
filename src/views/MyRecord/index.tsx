import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './_style.scss'
import { categories, myExercises, myDiary } from './samples'
import { format } from 'date-fns'
import LineChart from '../../components/LineChart'
import ReturnTop from '../../components/ReturnTop/ReturnTop'

function MyRecord() {
  return (
    <>
      <Header />
      <div className='myRecord'>
        <div className='category'>
          {categories.map((ca) => (
            <div
              className='item'
              key={ca.name}
              style={{
                backgroundImage: `url(${ca.img})`,
                backgroundPosition: ca.position,
                backgroundSize: ca.size,
              }}
            >
              <div>
                <h3>{ca.name}</h3>
                <div>{ca.jp}</div>
              </div>
            </div>
          ))}
        </div>

        <div className='bodyRecord'>
          <span className='title'>body record</span>
          <span className='time'>2021.05.21</span>

          <LineChart bg='dark' height={200} />

          <div className='buttons'>
            <button>日</button>
            <button>週</button>
            <button>月</button>
            <button className='select'>年</button>
          </div>
        </div>

        <div className='myExercise'>
          <span className='title'>my exercise</span>
          <span className='time'>2021.05.21</span>

          <div className='list'>
            {myExercises.map((exer, i) => (
              <div key={i}>
                <div className='info'>
                  <span>&#x2022;</span>
                  <div>
                    <p>{exer.name}</p>
                    <p className='calo'>{exer.kcal}kcal</p>
                  </div>
                </div>

                <div className='time'>10 min</div>
              </div>
            ))}
          </div>
        </div>

        <div className='diary'>
          <h3>my diary</h3>

          <div>
            {myDiary.map((d, i) => (
              <div key={i}>
                <h3>{format(d.time, 'yyyy.MM.dd HH:mm')}</h3>
                <p>{d.line}</p>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className='moreBtn'>コラムをもっと見る</button>

      <ReturnTop />

      <Footer />
    </>
  )
}

export default MyRecord
