import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Effect from './Component/Effect'
import Nav from './Component/Nav'
import Footer from './Component/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Nav/>
     <Effect/>
     <Footer/>
    </div>
  )
}

export default App
