import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import '../index.css'


const Header = () => {
  return (
    <header className='header'>
      <Logo/>
      <div className='InfoLinks'>
        <Link to='/' className='links infolink'>Помощь</Link>
        <Link to='/' className='links infolink'>
          Контакты
        </Link>
      </div>
      <Link to='/NavBarPA'  className='links'>
        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 30 20" aria-hidden="true"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
        Профиль
      </Link>
    </header>
  )
}

export default Header