import React from 'react'
import './_style.scss'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Column from './components/Column'
import { columns, products } from './samples'
import Product from './components/Product'
import ReturnTop from '../../components/ReturnTop/ReturnTop'

function ColumnPage() {
  return (
    <>
      <Header />

      <div className='columnPage'>
        <div className='columns'>
          {columns.map((col) => (
            <Column key={col.name} {...col} />
          ))}
        </div>

        <div className='products'>
          {products.map((pro, i) => (
            <Product key={i} {...pro} />
          ))}
        </div>

        <button className='moreBtn'>コラムをもっと見る</button>
      </div>

      <ReturnTop />

      <Footer />
    </>
  )
}

export default ColumnPage
