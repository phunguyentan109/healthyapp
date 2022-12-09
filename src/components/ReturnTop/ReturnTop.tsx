import scroll from 'assets/images/component_scroll.png'
import './_style.scss'
import { useEffect, useRef } from 'react'

function ReturnTop() {
  const scrollRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    let rootNode = document.getElementById('root')

    const handleScroll = () => {
      if (rootNode && scrollRef.current) {
        scrollRef.current.style.display = rootNode.scrollTop > 0 ? 'block' : 'none'
      }
    }

    if (rootNode) {
      rootNode.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (rootNode) rootNode.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const hdClick = () => {
    let rootNode = document.getElementById('root')

    if (!rootNode) return

    rootNode.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return <img className='scroll' onClick={hdClick} ref={scrollRef} src={scroll} alt='' />
}

export default ReturnTop
