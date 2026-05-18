import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Link } from "react-router";
import './App.css'
import Button from './components/Button.jsx'

export default function App() {
  return (
    <>
      <h1>Creatorverse</h1>
      <div className='navlinks'>
        <Button name='Show Creators' link='creators'></Button>
      </div>
    </>
  )
}