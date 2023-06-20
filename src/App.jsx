// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/app.css'

import Navbar from './components/navbar/navbar'
import Blog from './routes/blog'
import Contact from './routes/contact'
import Projects from './routes/projects'

/* check https://reactrouter.com/en/main/components/outlet
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<LandingPage />} />
          <Route path='projects' element={<h1>my projects</h1>} />
          <Route path='contact' element={<h1>contact me</h1>} />
          <Route path='*' element={<h1>Four ohh four</h1>} />            
        </Route>
      </Routes>
    </Router>    
  )
} */

export default function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route index element={<Blog />} />
          <Route path='/article'>
            <Route path='/article/:articleSlug' element={<p>test</p>} />
          </Route>
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<h1 >Four 😫hh four</h1>} />
        </Routes>
      </Router>    
    </>
  )
}