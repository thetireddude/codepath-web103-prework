import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Link } from "react-router";
import styles from './App.module.css'
import Button from './components/Button.jsx'

export default function App() {
  return (
    <>
      <h1>Creatorverse</h1>
      <div className={styles.navlinks}>
        <Button name='Show Creators' link='creators'></Button>
      </div>
    </>
  )
}