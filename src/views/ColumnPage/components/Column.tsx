import React from 'react'

type Props = {
  name: string
  jp: string
}

function Column(props: Props) {
  return (
    <div className='column'>
      <h3>{props.name}</h3>
      <hr />
      <p>{props.jp}</p>
    </div>
  )
}

export default Column
