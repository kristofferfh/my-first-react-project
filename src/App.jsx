// import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
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
          <Route index element={<Blog />} />
          <Route path='article'>
            <Route path=':articleSlug' element={<p>test</p>} />
          </Route>
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<h1 >Four 😫hh four</h1>} />
        </Routes>
      </Router>    
    </>
  )
}