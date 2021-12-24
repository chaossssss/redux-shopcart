import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShopApp from './components/App'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ShopApp />
    </div>
  )
}

export default App
