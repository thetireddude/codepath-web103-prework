import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { supabase } from './client.js'
import './index.css'
import App from './App.jsx'
import ShowCreators from './pages/ShowCreators.jsx'
import ViewCreator from './pages/ViewCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import AddCreator from './pages/AddCreator.jsx'

function Root() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchCreators() {
      const result = await supabase
        .from("creators")
        .select("*");

        // console.log(result.data)

        setData(result.data)
    }
    fetchCreators()
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          // <App />
          <ShowCreators data={data}></ShowCreators>
        }/>

        <Route path='creators' element={
          <ShowCreators data={data}></ShowCreators>
        }/>

        <Route path='view/:slug' element={
          <ViewCreator></ViewCreator>
        }/>

        <Route path='edit' element={
          <EditCreator></EditCreator>
        }/>

        <Route path='add' element={
          <AddCreator></AddCreator>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<Root/>)
