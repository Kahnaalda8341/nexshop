import React, { useState } from 'react'
import Header from './Header'
import './App.css'
import Home from './Home'
import { Outlet } from 'react-router'
import { useState } from 'react'
import { Themecontext } from '../contexts/ThemeContext'
import { ThemeProvider } from '../contexts/ThemeContext'


export default function App() {
  // const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
  return (
    <ThemeProvider>
        <Header/>
        <Outlet/>
    </ThemeProvider>
)
}

// PREVIOUS DESIGN
// <Themecontext.Provider value={[isDark, setIsDark]}>
  {/* <Header theme={[isDark, setIsDark]}/>
  <Outlet context={[isDark, setIsDark]}/> */}
{/* </Themecontext.Provider> */}