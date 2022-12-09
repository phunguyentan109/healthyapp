import './_style.scss'

const data = [
  '会員登録',
  '運営会社',
  '利用規約',
  '個人情報の取扱について',
  '特定商取引法に基づく表記',
  'お問い合わせ',
]

function Footer() {
  return (
    <div className='footer'>
      {data.map((d) => (
        <div key={d}>{d}</div>
      ))}
    </div>
  )
}

export default Footer
