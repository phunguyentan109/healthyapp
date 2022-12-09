import ActionIcon from 'assets/images/navIcons/actions.png'
import CloseIcon from 'assets/images/navIcons/cancel.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const menu = ['自分の記録', '体重グラフ', '目標', '選択中のコース', 'コラム一覧', '設定']

function Actions() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let rootNode = document.getElementById('root')

    const hdClick = () => setOpen(false)

    if (rootNode && open) {
      rootNode.addEventListener('click', hdClick)
    }

    return () => {
      if (rootNode) rootNode.removeEventListener('click', hdClick)
    }
  }, [open])

  return (
    <div className='actions' onClick={() => setOpen((prev) => !prev)}>
      <img src={open ? CloseIcon : ActionIcon} alt='' />

      <div className={`dropdown ${open ? 'open' : ''}`}>
        {menu.map((item, i) =>
          i !== 4 ? (
            <div key={item}>
              <Link to='#'>{item}</Link>
            </div>
          ) : (
            <div key={item}>
              <Link to='/column'>{item}</Link>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default Actions
