// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/app.css'

import Navbar from './components/navbar/navbar'
import Blog from './routes/blog'
import Contact from './routes/contact'
import Projects from './routes/projects'

export default function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route index element={<p>test0</p>} />
          <Route path='article'>
            <Route path=':articleSlug' element={<p>test1</p>} />
          </Route>
          <Route path='projects' element={<p>test2</p>} />
          <Route path='contact' element={<p>test3</p>} />
          <Route path='*' element={<h1 >Four 😫hh four</h1>} />
        </Routes>
      </Router>    
    </>
  )
}