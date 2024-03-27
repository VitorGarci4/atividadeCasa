import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import style  from'./App.module.css'
import Menu from './components/Menu'
import Media from './components/Media'

function App() {

  return (
    <div>
      <>
      <Menu/>
      <Media/>
      </>
    </div>
  )
}

export default App
