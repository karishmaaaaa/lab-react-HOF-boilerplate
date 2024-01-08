import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HigherorderFunction from './component/higherorderfunction'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <HigherorderFunction/>
      </div>
    </>
  )
}

export default App
