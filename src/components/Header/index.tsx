import './_style.scss'
import Logo from 'assets/images/logo-nobg.png'
import Record from 'assets/images/navIcons/record.png'
import Challenge from 'assets/images/navIcons/challenge.png'
import News from 'assets/images/navIcons/news.png'
import Actions from './components/Actions'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
      </div>

      <div className='nav'>
        <div className='nav-item'>
          <Link to='/record'>
            <img src={Record} alt='' />
            <span>自分の記録</span>
          </Link>
        </div>
        <div className='nav-item'>
          <img src={Challenge} alt='' />
          <span>チャレンジ</span>
        </div>
        <div className='nav-item notify'>
          <img src={News} alt='' />
          <span>お知らせ</span>
        </div>

        <Actions />
      </div>
    </div>
  )
}

export default Header
