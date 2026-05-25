import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Link } from "react-router";
import styles from './App.module.css'
import Button from './components/Button.jsx'
import { useNavigate } from 'react-router-dom';

export default function App() {

  const navigate = useNavigate();

  // Standard redirect
  // navigate('/creators'); 

  // Replace redirect (prevents going back)
  navigate('/creators', { replace: true }); 

  return (
    <>
      <h1>Creatorverse</h1>
      <div className={styles.navlinks}>
        <Button name='Show Creators' link='creators'></Button>
      </div>
    </>
  )
}