import './_style.scss'
import Logo from '../../assets/images/logo-nobg.png'
import Record from '../../assets/images/NavIcons/record.png'
import Challenge from '../../assets/images/NavIcons/challenge.png'
import News from '../../assets/images/NavIcons/news.png'
import Actions from '../../assets/images/NavIcons/actions.png'

function Header(props) {
  return (
    <div className='header'>
      <div className='logo'>
        <img src={Logo} alt='' />
      </div>

      <div className='nav'>
        <div className='nav-item'>
          <img src={Record} alt='' />
          <span>自分の記録</span>
        </div>
        <div className='nav-item'>
          <img src={Challenge} alt='' />
          <span>チャレンジ</span>
        </div>
        <div className='nav-item'>
          <img src={News} alt='' />
          <span>お知らせ</span>
        </div>

        <div className='actions'>
          <img src={Actions} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Header
