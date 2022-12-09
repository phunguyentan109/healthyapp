import { format } from 'date-fns'

type Props = {
  img: string
  time: Date
  desc: string
  tags: string[]
}

function Product(props: Props) {
  return (
    <div className='product'>
      <div className='imgWrapper'>
        <img src={props.img} alt='' />
        <div>{format(props.time, 'YYY.MM.dd HH:mm')}</div>
      </div>

      <div className='desc'>{props.desc}</div>

      <div className='tags'>
        {props.tags.map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export default Product
