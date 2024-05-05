import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
let myObj = {
  name: 'Ningsang',
  age: 25,
  address: {
    city: 'Kathmandu',
    province: 'Bagmati',
    country: 'Nepal'
  }
}

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 rounded-md'>Vite with Tailwind</h1>
      <Card userName="Ningsang" profile='https://www.ningsangjabegu.com.np/assets/images/Profile%20Picture.PNG' myArr={myObj} />
      <Card userName='Json' post='Staff'/>
      <Card />
    </>
  )
}

export default App
