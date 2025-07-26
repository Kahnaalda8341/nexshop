import React, { useContext } from 'react'
import { Link } from 'react-router';
import {  Themecontext } from '../contexts/ThemeContext';
import { useTheme } from '../hooks/useTheme';

const logo = new URL('./Logo.png', import.meta.url).href;
const logo2 = new URL('./Logo2.png', import.meta.url).href;


export default function Header() {
  // const [isDark, setIsDark] = theme
  // const [isDark, setIsDark] = useContext( Themecontext)
  
  const [isDark, setIsDark] = useTheme()
  return (
    <header className={isDark ? 'dark' : ''}>
      <Link href="#">
      {isDark ? <img src={logo2} alt="logo" className='logo' /> : <img src={logo} alt="logo" className='logo'/> } 
      </Link>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
        <Link>About Us</Link>
        <Link>Contact Us</Link>
        <div className="toggle" onClick={()=>{
          setIsDark(!isDark)
          localStorage.setItem('isDarkMode',!isDark)
          }}>
          <div className="toggle-icon left"></div>
        </div>
      </nav>
    </header>
  )
}
