import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Like Image</h1>
      <LikeImage />
      <h1>Like Post</h1>
      <LikePost />
    </div>
    </>
  )
}

export default App
